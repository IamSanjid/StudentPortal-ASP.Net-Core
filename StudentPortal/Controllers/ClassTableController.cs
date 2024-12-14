using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentPortal.Data;

namespace StudentPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassTableController(ApplicationDbContext context) : ControllerBase
    {
        private readonly ApplicationDbContext _context = context;

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            return Ok(await _context.ClassTable.ToListAsync());
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult> GetById(int id)
        {
            var clazz = await _context.StudentTable.FindAsync(id);
            if (clazz is null)
            {
                return NotFound();
            }
            return Ok(clazz);
        }
    }
}
