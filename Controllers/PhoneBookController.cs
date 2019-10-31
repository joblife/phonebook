using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LiteDB;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Phonebook.Models;

namespace Phonebook.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhoneBookController : ControllerBase
    {
        // GET: api/PhoneBook
        [HttpGet]
        public IEnumerable<PhoneBookEntry> Get()
        {
            using (var db = new LiteDatabase(@"Phonebook.db"))
            {
                var users = db.GetCollection<PhoneBookEntry>("phonebookentries");

                return users.FindAll();
            };

        }

        // GET: api/PhoneBook/5
        [HttpGet("{value}", Name = "Get")]
        public IEnumerable<PhoneBookEntry> Get(string value)
        {
            using (var db = new LiteDatabase(@"Phonebook.db"))
            {
                var users = db.GetCollection<PhoneBookEntry>("phonebookentries");
                return users.Find(x => x.Name.ToLowerInvariant().Contains(value.ToLowerInvariant())).ToList();
            };
        }

        // POST: api/PhoneBook
        [HttpPost]
        public void Post(PhoneBookEntry phoneBookEntry)
        {
            using (var db = new LiteDatabase(@"Phonebook.db"))
            {
                var users = db.GetCollection<PhoneBookEntry>("phonebookentries");
                users.Insert(phoneBookEntry);
                users.EnsureIndex(x => x.Name);
            };
        }

        // PUT: api/PhoneBook/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
