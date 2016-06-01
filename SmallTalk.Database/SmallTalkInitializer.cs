using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

using SmallTalk.DomainModels;

namespace SmallTalk.Database
{
    public class SmallTalkInitializer 
    {
        public static void AddData(ISmallTalkContext context)
        {
            var now = DateTime.UtcNow;
            var conversationStarters = new List<ConversationStarter> {
                new ConversationStarter() { Language = Languages.English, Text = "What colour is the sky in your world?" },
                new ConversationStarter() { Language = Languages.English, Text = "What time is it?" },
                new ConversationStarter() { Language = Languages.English, Text = "Do you know the way to San Jose?" },
                new ConversationStarter() { Language = Languages.German, Text = "Was machst du?" }
            };

            conversationStarters.ForEach(c => context.ConversationStarters.Add(c));
            context.SaveChanges();
        }

        //protected override void Seed(SmallTalkContext context)
        //{
        //    var conversationStarters = new List<ConversationStarter> {
        //        new ConversationStarter() { Language = Languages.English, Text = "XWhat colour is the sky in your world?" },
        //        new ConversationStarter() { Language = Languages.English, Text = "XWhat time is it?" },
        //        new ConversationStarter() { Language = Languages.English, Text = "XDo you know the way to San Jose?" },
        //        new ConversationStarter() { Language = Languages.German, Text = "XWas machst du?" }
        //    };
        //    context.ConversationStarters.AddRange(conversationStarters);

        //    base.Seed(context);
        //    context.SaveChanges();
        //}
    }

}
