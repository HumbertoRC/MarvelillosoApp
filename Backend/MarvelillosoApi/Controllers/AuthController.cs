using Microsoft.AspNetCore.Mvc;
using MarvelillosoApi.Data;
using System;
using Microsoft.Data.SqlClient;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace MarvelillosoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly DatabaseHelper _db;

        public AuthController(DatabaseHelper db)
        {
            _db = db;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            try
            {
                using (var connection = _db.GetConnection())
                {
                    await connection.OpenAsync();

                    // Verificar si el usuario ya existe
                    var checkCmd = new SqlCommand("SELECT COUNT(*) FROM Users WHERE Email = @Email OR Username = @Username", connection);
                    checkCmd.Parameters.AddWithValue("@Email", request.Email);
                    checkCmd.Parameters.AddWithValue("@Username", request.Username);

                    int exists = (int)await checkCmd.ExecuteScalarAsync();
                    if (exists > 0)
                    {
                        return Conflict(new { message = "El email o el nombre de usuario ya está registrado." });
                    }

                    // Hashear la contraseña
                    using var sha256 = SHA256.Create();
                    var passwordBytes = Encoding.UTF8.GetBytes(request.Password);
                    var hash = sha256.ComputeHash(passwordBytes);

                    // Insertar usuario nuevo
                    var cmd = new SqlCommand(
                        "INSERT INTO Users (Email, Username, PasswordHash) VALUES (@Email, @Username, @PasswordHash)",
                        connection
                    );

                    cmd.Parameters.AddWithValue("@Email", request.Email);
                    cmd.Parameters.AddWithValue("@Username", request.Username);
                    cmd.Parameters.AddWithValue("@PasswordHash", hash);

                    await cmd.ExecuteNonQueryAsync();

                    return Ok(new { message = "Usuario registrado correctamente." });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Error interno", error = ex.Message });
            }
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            try
            {
                using (var connection = _db.GetConnection())
                {
                    await connection.OpenAsync();

                    // Buscar usuario por email
                    var cmd = new SqlCommand("SELECT id, PasswordHash, Username FROM Users WHERE Email = @Email", connection);
                    cmd.Parameters.AddWithValue("@Email", request.Email);

                    var reader = await cmd.ExecuteReaderAsync();

                    if (!reader.HasRows)
                    {
                        return Unauthorized(new { message = "Email o contraseña incorrectos." });
                    }

                    await reader.ReadAsync();

                    int userId = (int)reader["id"];
                    byte[] storedHash = (byte[])reader["PasswordHash"];
                    string username = reader["Username"].ToString();

                    reader.Close();

                    // Hashear la contraseña que envía el usuario
                    using var sha256 = SHA256.Create();
                    var passwordBytes = Encoding.UTF8.GetBytes(request.Password);
                    var hash = sha256.ComputeHash(passwordBytes);

                    // Comparar hashes
                    bool passwordsMatch = storedHash.SequenceEqual(hash);

                    if (!passwordsMatch)
                    {
                        return Unauthorized(new { message = "Email o contraseña incorrectos." });
                    }

                    // Login exitoso
                    return Ok(new { message = "Login exitoso", userId = userId, username = username });
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Error interno", error = ex.Message });
            }
        }

        public class LoginRequest
        {
            public string Email { get; set; } = "";
            public string Password { get; set; } = "";
        }
    }

    public class RegisterRequest
    {
        public string Email { get; set; } = "";
        public string Username { get; set; } = "";
        public string Password { get; set; } = "";
    }
}
