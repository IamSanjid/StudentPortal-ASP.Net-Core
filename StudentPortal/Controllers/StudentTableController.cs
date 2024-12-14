using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentPortal.Data;
using StudentPortal.Entities;

namespace StudentPortal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentTableController(ApplicationDbContext context) : ControllerBase
    {
        private readonly ApplicationDbContext _context = context;

        [HttpGet]
        public async Task<ActionResult> GetAll()
        {
            return Ok(await _context.StudentTable.ToListAsync());
        }

        [HttpGet("{id:guid}")]
        public async Task<ActionResult> GetById(Guid id)
        {
            var student = await _context.StudentTable.FindAsync(id);
            if (student is null)
            {
                return NotFound();
            }
            return Ok(student);
        }

        [HttpPost]
        public async Task<ActionResult> AddStudent(Student student)
        {
            student.CreatedAt = DateTime.UtcNow;
            student.ModifiedAt = student.CreatedAt;

            await _context.StudentTable.AddAsync(student);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = student.Id }, student);
        }

        [HttpPut("{id:guid}")]
        public async Task<ActionResult> UpdateStudent(Guid id, Student updatedStudent)
        {
            var student = await _context.StudentTable.FindAsync(id);
            if (student is null)
            {
                return NotFound();
            }

            student.Name = updatedStudent.Name;
            student.Gender = updatedStudent.Gender;
            student.DOB = updatedStudent.DOB;
            student.ClassId = updatedStudent.ClassId;
            student.ModifiedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult> DeleteStudent(Guid id)
        {
            var student = await _context.StudentTable.FindAsync(id);
            if (student is null)
            {
                return NotFound();
            }

            _context.StudentTable.Remove(student);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
