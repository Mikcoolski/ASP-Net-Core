//var builder = WebApplication.CreateBuilder(args);
//var app = builder.Build();

//app.MapGet("/", () => "Hello World!");

//app.Run();
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Hosting;

namespace ASP_.Net_Core
{
    public class Program
    {
        public static void Main(string[] args)
        {

            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) => 
            Host.CreateDefaultBuilder(args).
            ConfigureWebHostDefaults(WebBuilder =>
        {
            WebBuilder.UseStartup<Startup>();
        });
        }
    }
