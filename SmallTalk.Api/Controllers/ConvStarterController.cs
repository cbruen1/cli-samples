using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using SmallTalk.DomainModels;
using SmallTalk.Repository;

namespace SmallTalk.Api.Controllers
{
    [Route("api/[controller]")]
    public class ConvStarterController
    {
        private ISmallTalkRepository ConvStarterRepo;

        public ConvStarterController(ISmallTalkRepository repo)
        {
            ConvStarterRepo = repo;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<ConversationStarter> GetSampleList()
        {
            var list = ConvStarterRepo.GetSampleList();

            return list;
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetConvStarter")]
        public IActionResult GetById(long id)
        {
            var item = ConvStarterRepo.Find(id);

            if (item == null)
            {
                return new NotFoundResult();
            }

            return new ObjectResult(item);
        }

        // GET api/values/5
        [HttpGet("{key}")]
        public IActionResult GetById(string key)
        {
            var item = ConvStarterRepo.Find(key);

            if (item == null)
            {
                return new NotFoundResult();
            }

            return new ObjectResult(item);
        }

        // POST api/values
        //[HttpPost]
        //public IActionResult Create([FromBody]ConversationStarter item)
        //[ValidateAntiForgeryToken]
        public IActionResult Create([Bind("Text", "Language")][FromBody]ConversationStarter item)
        {
            if (item == null)
            {
                return new BadRequestResult();
            }

            var itemDomain = new ConversationStarter()
            {
                DateAdded = item.DateAdded,
                Language = item.Language,
                Text = item.Text
            };

            ConvStarterRepo.Add(itemDomain);

            //var result = CreatedAtRouteResult("GetConvStarter", new { Controller = "ConvStarter", id = item.Id }, item);
            var result = Create(item);

            return result;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody]ConversationStarter item)
        {
            if (item == null)
            {
                return new BadRequestResult();
            }

            var convStarterObj = ConvStarterRepo.Find(id);

            if (convStarterObj == null)
            {
                return new BadRequestResult();
            }

            // Updated - pass item param instead of object retrieved from repo
            ConvStarterRepo.Update(item);

            return new NoContentResult();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(long id)
        {
            ConvStarterRepo.Remove(id);
        }
    }
}