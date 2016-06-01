using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using SmallTalk.DomainModels;

namespace SmallTalk.Database
{
    public class SmallTalkContext : DbContext, ISmallTalkContext
    {
        public DbSet<ConversationStarter> ConversationStarters { get; set; }

        public SmallTalkContext(DbContextOptions<SmallTalkContext> options) 
            : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder. .Conventions.Remove<PluralizingTableNameConvention>();
            foreach (var entity in modelBuilder.Model.GetEntityTypes())
            {
                entity.Relational().TableName = entity.DisplayName();
            }
        }

        public void SetModified(object entity)
        {
            Entry(entity).State = EntityState.Modified;
        }
    }
}
