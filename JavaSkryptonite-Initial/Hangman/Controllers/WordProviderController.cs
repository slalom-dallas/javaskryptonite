using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hangman.Controllers
{
    public class WordProviderController : ApiController
    {
        public string Get(int minSize, int maxSize)
        {
            string randomWord = string.Empty;

            // Select the words that fall within the specified range
            var possibleWords = _words.Where(word => 
                    word.Length >= minSize && 
                    word.Length <= maxSize
                );

            // If there are possible words, get one at random
            var numberOfPossibleWords = possibleWords.Count();
            if (numberOfPossibleWords > 0)
            {
                Random random = new Random((int)DateTime.Now.Ticks);
                var index = random.Next(0, numberOfPossibleWords - 1);
                randomWord = possibleWords.ElementAt(index);
            }

            // Return the random word, or "" if none are found.
            return randomWord;
        }


        private static string[] _words = new string[] 
        { 
            "Test",
            "Kent",
            "Clark",
            "Chander",
            "Jasmine",
            "Chutzpah",
            "Superman",
            "JavaScript", 
            "Kryptonite",
            "Javaskryptonite",
        };
    }
}
