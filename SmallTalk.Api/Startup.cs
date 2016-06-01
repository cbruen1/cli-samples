using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

using SmallTalk.DomainModels;
using SmallTalk.Repository;
using SmallTalk.Database;

namespace SmallTalk.Api
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            var connection = @"Server=(localdb)\mssqllocaldb;Database=SmallTalk;Trusted_Connection=True;";

            services
                .AddMvcCore()
                .AddJsonFormatters();

            services
                .AddEntityFrameworkSqlServer()
                .AddDbContext<SmallTalkContext>(options => options.UseSqlServer(connection));

            services.AddSingleton<ISmallTalkRepository, SmallTalkRepository>();
            services.AddSingleton<ISmallTalkContext, SmallTalkContext>();
        }

        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(LogLevel.Debug);

            app.UseMvc();
        }
    }
}