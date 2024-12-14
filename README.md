# WebAPI/Server Configuration

  Requirements: Need .Net 9, SQLExpress Database Server(https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

  * Assumes the SQL Server instance is running as `localhost\SQLEXPRESS`('\' not escaped) without any extra authentication enabled. Can be changed through `appsettings.json`.
  * The DB name is `StudentPortalDB` shouldn't conflict with any other DB.
  * Used `Microsoft.EntityFrameworkCore.Tools` for most of the database initial table creations.
    - After installing the package through Nuget Package Manager, open "Package Manager Console" inside of Visual Studio.
    - Run `Update-Database` to automatically configure the database.
    - If something goes wrong try to run `Add-Migration <Migration_Name>`. eg. `Add-Migration New-Test1` then run `Update-Database` once again.

# Building UI, used `Vite+React.JS(TypeScript)`.

  * Navigate to `studentportal-ui` run `npm i`
  * Run `npm run build`
  * Copy all the contents of `dist` to `StudentPortal/wwwroot` folder.


Now launching the ASP.Net Core project should be enough to run everything.
	