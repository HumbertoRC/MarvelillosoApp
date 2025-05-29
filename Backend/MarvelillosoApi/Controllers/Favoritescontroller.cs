using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using MarvelillosoApi.Data;
using System.Threading.Tasks;

namespace MarvelillosoApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FavoritesController : ControllerBase
    {
        private readonly DatabaseHelper _db;

        public FavoritesController(DatabaseHelper db)
        {
            _db = db;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddFavorite([FromBody] FavoriteRequest request)
        {
            using var connection = _db.GetConnection();
            await connection.OpenAsync();

            var cmd = new SqlCommand("INSERT INTO Favorites (UserId, MovieId) VALUES (@UserId, @MovieId)", connection);
            cmd.Parameters.AddWithValue("@UserId", request.UserId);
            cmd.Parameters.AddWithValue("@MovieId", request.MovieId);

            try
            {
                await cmd.ExecuteNonQueryAsync();
                return Ok(new { message = "Película agregada a favoritos." });
            }
            catch (SqlException ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetFavorites(int userId)
        {
            using var connection = _db.GetConnection();
            await connection.OpenAsync();

            var cmd = new SqlCommand("SELECT MovieId FROM Favorites WHERE UserId = @UserId", connection);
            cmd.Parameters.AddWithValue("@UserId", userId);

            var reader = await cmd.ExecuteReaderAsync();
            var favorites = new List<int>();

            while (await reader.ReadAsync())
            {
                favorites.Add(reader.GetInt32(0));
            }

            return Ok(favorites);
        }

        [HttpDelete("remove")]
        public async Task<IActionResult> RemoveFavorite([FromBody] FavoriteRequest request)
        {
            using var connection = _db.GetConnection();
            await connection.OpenAsync();

            var cmd = new SqlCommand("DELETE FROM Favorites WHERE UserId = @UserId AND MovieId = @MovieId", connection);
            cmd.Parameters.AddWithValue("@UserId", request.UserId);
            cmd.Parameters.AddWithValue("@MovieId", request.MovieId);

            await cmd.ExecuteNonQueryAsync();
            return Ok(new { message = "Película eliminada de favoritos." });
        }
    }

    public class FavoriteRequest
    {
        public int UserId { get; set; }
        public int MovieId { get; set; }
    }
}
