using Microsoft.AspNetCore.OpenApi;
using Microsoft.AspNetCore.Http.HttpResults;
namespace StudentPortal.Entities
{
    public class Student
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public int Gender { get; set; }
        public DateTime DOB { get; set; }
        public int ClassId { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
