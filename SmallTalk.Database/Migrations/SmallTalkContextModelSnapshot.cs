using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using SmallTalk.DomainModels;
using SmallTalk.Database;

namespace SmallTalk.Database.Migrations
{
    [DbContext(typeof(SmallTalkContext))]
    partial class SmallTalkContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rc2-20901")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("SmallTalk.DomainModels.ConversationStarter", b =>
            {
                b.Property<long>("Id")
                    .ValueGeneratedOnAdd();

                b.Property<DateTimeOffset>("DateAdded");

                b.Property<DateTimeOffset>("DateUpdated");

                b.Property<int>("Language");

                b.Property<string>("Text");

                b.HasKey("Id");

                b.ToTable("ConversationStarter");
            });
        }
    }
}
