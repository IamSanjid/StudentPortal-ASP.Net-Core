using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StudentPortal.Migrations
{
    /// <inheritdoc />
    public partial class InitialTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Students",
                table: "Students");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Classes",
                table: "Classes");

            migrationBuilder.RenameTable(
                name: "Students",
                newName: "StudentTable");

            migrationBuilder.RenameTable(
                name: "Classes",
                newName: "ClassTable");

            migrationBuilder.AddPrimaryKey(
                name: "PK_StudentTable",
                table: "StudentTable",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_ClassTable",
                table: "ClassTable",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_StudentTable",
                table: "StudentTable");

            migrationBuilder.DropPrimaryKey(
                name: "PK_ClassTable",
                table: "ClassTable");

            migrationBuilder.RenameTable(
                name: "StudentTable",
                newName: "Students");

            migrationBuilder.RenameTable(
                name: "ClassTable",
                newName: "Classes");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Students",
                table: "Students",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Classes",
                table: "Classes",
                column: "Id");
        }
    }
}
