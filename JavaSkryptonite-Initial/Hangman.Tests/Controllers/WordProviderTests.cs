using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Hangman.Controllers;

namespace Hangman.Tests.Controllers
{
    [TestClass]
    public class WordProviderTests
    {
        [TestMethod]
        public void Get_ShouldReturnAValueWithinMinSizeAndMaxSize()
        {
            int minSize = 1;
            int maxSize = 5;
            var wordProvider = new WordProviderController();

            var word = wordProvider.Get(minSize, maxSize);

            Assert.IsTrue(word.Length >= minSize);
            Assert.IsTrue(word.Length <= maxSize);
        }

        [TestMethod]
        public void Get_ShouldReturnALargeValueWhenGivenRangeMoreThan10()
        {
            int minSize = 11;
            int maxSize = 100; 
            var wordProvider = new WordProviderController();

            var word = wordProvider.Get(minSize, maxSize);

            Assert.AreEqual("Javaskryptonite", word);
        }
    }
}
