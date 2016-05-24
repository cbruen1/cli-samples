//using System.Data.Entity;
using System;
using SmallTalk.DomainModels;
using Microsoft.EntityFrameworkCore;

namespace SmallTalk.Database
{
    public interface ISmallTalkContext : IDisposable
    {
        /// <summary>
        /// Gets or sets a DbSet to manage conversation starters
        /// </summary>
        //IDbSet<ConversationStarter> ConversationStarters { get; set; }
        DbSet<ConversationStarter> ConversationStarters { get; set; }

        /// <summary>
        /// Saves changes in model
        /// </summary>
        /// <returns>The number of objects written to the underlying database.</returns>
        int SaveChanges();

        /// <summary>
        /// Set entity to the state modified
        /// </summary>
        /// <param name="entity">Entity which is modified</param>
        void SetModified(object entity);
    }
}
