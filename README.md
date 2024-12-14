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


![image](https://github.com/user-attachments/assets/022b8926-8deb-4e25-b6da-e6d8ced179da)
![image](https://github.com/user-attachments/assets/143fde4a-7dbc-4ea6-80bc-ad97675ea65f)
![image](https://github.com/user-attachments/assets/8a3696af-dd6d-44ba-9fc5-85b3b506b140)
![image](https://github.com/user-attachments/assets/63c5709d-923a-44d0-b661-b8fed8a9a2a0)

