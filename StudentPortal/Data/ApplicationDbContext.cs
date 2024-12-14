using Microsoft.EntityFrameworkCore;

namespace StudentPortal.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Entities.Student> StudentTable => Set<Entities.Student>();
        public DbSet<Entities.Class> ClassTable => Set<Entities.Class>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            string[] classNames = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];

            DateTime localTime = new(2024, 12, 14, 14, 32, 0, DateTimeKind.Unspecified);
            TimeZoneInfo gmtPlus6 = TimeZoneInfo.FindSystemTimeZoneById("Bangladesh Standard Time");
            DateTime utcTime = TimeZoneInfo.ConvertTimeToUtc(localTime, gmtPlus6);

            for (int i = 0; i < classNames.Length; i++)
            {
                modelBuilder.Entity<Entities.Class>().HasData(
                    new Entities.Class
                    {
                        Id = i + 1,
                        Name = classNames[i],
                        CreatedAt = utcTime,
                        ModifiedAt = utcTime,
                    }
                );
            }
        }
    }
}
