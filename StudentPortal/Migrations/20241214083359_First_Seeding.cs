using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace StudentPortal.Migrations
{
    /// <inheritdoc />
    public partial class First_Seeding : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "ClassTable",
                columns: new[] { "Id", "CreatedAt", "ModifiedAt", "Name" },
                values: new object[,]
                {
                    { 1, new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), "One" },
                    { 2, new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), "Two" },
                    { 3, new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), "Three" },
                    { 4, new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), "Four" },
                    { 5, new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), "Five" },
                    { 6, new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), "Six" },
                    { 7, new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), "Seven" },
                    { 8, new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), "Eight" },
                    { 9, new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), "Nine" },
                    { 10, new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), "Ten" },
                    { 11, new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), "Eleven" },
                    { 12, new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), new DateTime(2024, 12, 14, 8, 32, 0, 0, DateTimeKind.Utc), "Twelve" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ClassTable",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "ClassTable",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "ClassTable",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "ClassTable",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "ClassTable",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "ClassTable",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "ClassTable",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "ClassTable",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "ClassTable",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "ClassTable",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "ClassTable",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "ClassTable",
                keyColumn: "Id",
                keyValue: 12);
        }
    }
}
