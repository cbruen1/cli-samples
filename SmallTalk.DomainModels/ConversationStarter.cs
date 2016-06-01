using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SmallTalk.DomainModels
{
    public class ConversationStarter
    {
        public long Id { get; set; }
        public string Text { get; set; }
        public Languages Language { get; set; }
        public DateTimeOffset DateAdded { get; set; }
        public DateTimeOffset? DateUpdated { get; set; }
    }

    public enum Languages
    {
        English,
        German,
        Spanish,
        French
    }
}
