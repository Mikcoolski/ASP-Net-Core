using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace ASP_.Net_Core
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //ordering matters here. This dictates which order the files should be delivered on load
            //use default files depending on the root provided. When we launch the app, it uses the root url and the
            //defaultfiles method sets the path to what we have set in the wwwroot folder
            //In this case if we are looking to load the root url
            app.UseDefaultFiles();

            //Then this method knows how to serve that path from the defaultfiles method
            app.UseStaticFiles();

        }
    }
}
