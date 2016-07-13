using SmallTalk.DomainModels;
using System.Collections.Generic;

namespace SmallTalk.Repository
{
    public interface ISmallTalkRepository
    {
        void Add(ConversationStarter item);
        IEnumerable<ConversationStarter> GetStarterList();
        ConversationStarter Find(long id);
        ConversationStarter Find(string key);
        void Remove(long id);
        void Update(ConversationStarter item);
    }
}
