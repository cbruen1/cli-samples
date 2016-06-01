using System;
using System.Collections.Generic;
using System.Linq;
using SmallTalk.DomainModels;
using SmallTalk.Database;

namespace SmallTalk.Repository
{
    public class SmallTalkRepository : ISmallTalkRepository
    {
        public ISmallTalkContext _context { get; set; }

        public SmallTalkRepository(ISmallTalkContext context)
        {
            _context = context;
        }

        public void Add(ConversationStarter item)
        {
            _context.ConversationStarters.Add(item);
            _context.SaveChanges();
        }

        public ConversationStarter Find(long id)
        {
            var item = _context.ConversationStarters.FirstOrDefault(c => c.Id == id);

            return item;
        }

        public ConversationStarter Find(string key)
        {
            var item = _context.ConversationStarters.FirstOrDefault(c => c.Text.Contains(key));

            return item;
        }

        public IEnumerable<ConversationStarter> GetSampleList()
        {
            var list = _context.ConversationStarters.Where(c => c.Id <= 20);

            return list;
        }

        public void Remove(long id)
        {
            var itemToRemove = _context.ConversationStarters.FirstOrDefault(c => c.Id == id);

            if (itemToRemove != null)
            {
                _context.ConversationStarters.Remove(itemToRemove);
            }

            _context.SaveChanges();
        }

        public void Update(ConversationStarter item)
        {
            var itemToUpdate = _context.ConversationStarters.FirstOrDefault(c => c.Id == item.Id);

            if (itemToUpdate != null)
            {
                itemToUpdate.DateUpdated = DateTimeOffset.UtcNow;
                itemToUpdate.Text = item.Text;
                itemToUpdate.Language = item.Language;
            }

            _context.SaveChanges();
        }
    }
}
