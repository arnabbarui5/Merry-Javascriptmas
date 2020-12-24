#  :christmas_tree: 24 Days JavaScriptmas-Challenge  :christmas_tree: 


# Javascriptmas

This is a set of programming challenges from [scrimba.com](https://scrimba.com) dubbed [24 days of JavaScriptmas](https://scrimba.com/learn/adventcalendar). It runs from December 01, 2020 - December 24, 2020. Each day a JavaScript challenge is posted and participants are free to attempt and share their solution on twitter. If you want to contribute to this set of solutions, read the [contribution](/CONTRIBUTING.md) instructions.

## Challenges

### Candies

![candies challenge](questions/01-candies.png?raw=true "Candies challenge")

<details>
   <summary>Solution 1</summary>
   <p>
     
  ```js
   function candies(children, candy) {
     return Math.floor(candy / children) * children;
   }
  ```
    
   </p>
</details>

<details>
   <summary>Solution 2</summary>
   <p>
     
  ```js
   function candies(children, candy) {
      return candy - (candy % children);
   }
  ```
    
   </p>
</details>

**********

### Deposit profit

![deposit profit challenge](questions/02-deposit-profit.png?raw=true "Deposit profit challenge")

<details>
   <summary>Solution</summary>
   <p>

  ```js
   function depositProfit(deposit, rate, threshold) {
    const years = Math.log(threshold / deposit) / Math.log(1 + rate / 100);
    return Number.isInteger(years) ? years + 1 : Math.ceil(years);
  }
  ```

   </p>
</details>

**********

### Chunkey monkey

![chunkey monkey challenge](questions/03-chunky-monkey.png?raw=true "Chunky monkey challenge")

<details>
  <summary>Solution</summary>
  <p>

  ```js
  function chunkyMonkey(values, size) {
    const chunkedArray = [];
    const arrayLength = values.length;
    for(let i = 0; i < arrayLength; i += size){
        chunkedArray.push(values.slice(i, i + size));
    }
    return chunkedArray;
  }
  ```

  </p>

</details>

**********

### Century from year

![century from year challenge](questions/04-century-from-year.png?raw=true "Century from year challenge")

<details>
   <summary>Solution</summary>

   <p>

   ```js

   function centuryFromYear(num) {
      return num % 100 ? Math.ceil(num/100): num/100;
   }

   ```

   </p>

</details>

***********

### Reverse a string

![reverse a string challenge](questions/05-reverse-string.png?raw=true "Reverse a string challenge")

<details>
   <summary>Solution 1</summary>

   <p>

   ```js
   function reverseAString(str) {
      return str.split('').reverse().join('');
   }
   ```

   </p>
</details>

<details>
   <summary>Solution 2</summary>

   <p>

   ```js
   function reverseAString(str) {
      let reversedString = ''; const { length } = str;

      for (let i = 0; i < length; i += 1) {
        reversedString = str[i] + reversedString;
      }

      return reversedString;
   }
   ```

   </p>
</details>

**********

### Sort by length

![sort by length challenge](questions/06-sort-by-length.png?raw=true "Sort by length challenge")

<details>

   <summary>Solution</summary>
   <p>

   ```js
   function sortByLength(strs) {
      return strs.sort((a, b) => a.length - b.length);
   }
   ```
   </p>
</details>

**********

### Count Vowel Consonant

![count vowel consonant challenge](questions/07-count-vowel-consonant.png?raw=true "Count Vowel Consonant challenge")

<details>
   
   <summary>Solution</summary>

   <p>

   ```js
   function countVowelConsonant(str) {
     return str.split('').reduce((count, char) => ('aeiou'.indexOf(char) === -1 ? count + 2 : count + 1), 0);
   }
   ```

   </p>

</details>

**********

### Sum odd fibonacci numbers

![sum odd fibonacci numbers challenge](questions/09-sum-odd-fibonacci-numbers.png?raw=true "Sum odd fibonacci numbers challenge")

<details>
   
   <summary>Solution</summary>

   <p>

   ```js

   function sumOddFibonacciNumbers(num) {
      if (num < 2) return 2;

      const cache = [1, 1];
      let sumOfOddFibNums = 2;
      
      while (cache[0] + cache[1] <= num) {
         const nextFibNum = cache[0] + cache[1];
         if (nextFibNum % 2) {
            sumOfOddFibNums += nextFibNum;
         }
         cache[0] = cache[1];
         cache[1] = nextFibNum;
      }

      return sumOfOddFibNums;

   }

   ```

   </p>

</details>

***********

### Adjacent elements product

![adjacent elements product challenge](questions/10-adjacent-elements-product.png?raw=true "Adjacent elements product challenge")

<details>
   
   <summary>Solution</summary>

   <p>

   ```js

   function adjacentElementsProduct(nums) {

      if (nums.length < 2) return nums[0];

      let product = nums[0] * nums[1];
      const lastIndex = nums.length - 1;

      for (let i = 1; i < lastIndex; i++) {
         if (nums[i] * nums[i + 1] > product) {
            product = nums[i] * nums[i + 1];
         }
      }
      return product;
   }

   ```


   </p>

</details>

**********

### Avoid obstacles

![avoid obstacles challenge](questions/11-avoid-obstacles.png?raw=true "Avoid obstacles challenge")

<details>

   <summary>Solution</summary>

   <p>

   ```js
   function avoidObstacles(nums) {
      if (!Array.isArray(nums) || !nums.length) {
         throw new Error('Requires integer array');
      }

      const largestObstacle = Math.max(...nums);
      /*
         OR:
         const largestObstacle = nums.reduce((prev, curr) => {
             return curr > prev ? curr : prev;
         });
      */

      for (let jump = 2; jump <= largestObstacle; jump += 1) {
         if (nums.every((obstacle) => obstacle % jump !== 0)) {
            return jump;
         }
      }
      return largestObstacle + 1;
   }
   ```

   </p>

</details>

**********

### Valid time

![valid time challenge](questions/12-valid-time.png?raw=true "Valid time challenge")

<details>

   <summary>Solution</summary>

   <p>

   ```js
   function validTime(str) {

      if (typeof str !== 'string' || !str.includes(':')) {
         return false;
      }

      let [hour, minutes] = str.trim().split(':');
      hour = hour.trim();
      minutes = minutes.trim();

      if (/\D/.test(hour) || /\D/.test(minutes)) {
         return false;
      }

      hour = parseInt(hour, 10);
      minutes = parseInt(minutes, 10);
      return hour >= 0 && hour < 24 && minutes >= 0 && minutes < 60;
   }
   ```

   </p>

</details>

**********

### Extract each kth element

![extract each kth element challenge](questions/13-extract-each-kth.png?raw=true "Extract each kth element challenge")


<details>

   <summary>Solution</summary>

   <p>
   
   ```js

   function extractEachKth(nums, index) {
     return nums.filter((__, i) => (i + 1) % index !== 0);
   }

   ```

   </p>

</details>

**********

### Array maximal adjacent difference

![array maximal adjacent difference challenge](questions/14-array-maximal-adjacent-diff.png?raw=true "Array maximal adjacent difference challenge")

<details>
  <summary>Solution</summary>

  <p>

  ```js
  function arrayMaximalAdjacentDifference(nums) {

      if (!Array.isArray(nums) || !nums.length) {
         throw new Error('Invalid argument');
      }

      if (nums.length < 2) return nums[0];

      let maxAbsoluteDiff = Math.abs(nums[0] - nums[1]);
      const lastIndex = nums.length - 1;

      for (let i = 1; i < lastIndex; i += 1) {
         const diff = Math.abs(nums[i] - nums[i + 1]);
         if (maxAbsoluteDiff < diff) {
            maxAbsoluteDiff = diff;
         }
      }

      return maxAbsoluteDiff;
   }
  ```
  </p>

</details>

**********

### JavaScript Carousel

![JavaScript Carousel challenge](questions/15-javascrpt-carousel.png?raw=true "JavaScript Carousel Challenge")

<details>
   <summary>Solution</summary>

   <p>

   ```js
   const previousButton = document.querySelector('.previous');
   const nextButton = document.querySelector('.next');
   const allImages = document.querySelectorAll('img.card');
   const gallery = document.querySelector('.gallery');
   const imageCount = allImages.length;

   let visibleImageId = 0;

   function togglePreviousButtonBlur(action = 'INCREASE_OPACITY') {
      if (action === 'LOWER_OPACITY') {
         previousButton.style.opacity = 0.3;
         return;
      }
      previousButton.style.opacity = 1;
   }

   function toggleNextButtonBlur(action = 'INCREASE_OPACITY') {
      if (action === 'LOWER_OPACITY') {
         nextButton.style.opacity = 0.3;
         return;
      }
      nextButton.style.opacity = 1;
   }

   function translateGallery(visibleImageId) {
      const currentVisibleImage = document.querySelector('.current');

      currentVisibleImage.classList.remove('current');
      allImages[visibleImageId].classList.add('current');
      gallery.style.transform = `translateX(${visibleImageId * -220}px)`;
   }

   function previousButtonClickHandler() {
      if (visibleImageId === 0) return;

      translateGallery(--visibleImageId);

      if (visibleImageId === 0) {
         togglePreviousButtonBlur('LOWER_OPACITY');
         return;
      }

      togglePreviousButtonBlur();
      toggleNextButtonBlur();
   }

   function nextButtonClickHandler() {
      if (visibleImageId === imageCount - 1) return;

      translateGallery(++visibleImageId);

      if (visibleImageId === imageCount - 1) {
         toggleNextButtonBlur('LOWER_OPACITY');
         return;
      }
      toggleNextButtonBlur();
      togglePreviousButtonBlur();
   }

   previousButton.addEventListener('click', previousButtonClickHandler);
   nextButton.addEventListener('click', nextButtonClickHandler);


   ```
   </p>

</details>

**********

### Insert Dashes

![insert dashes challenge](questions/16-insert-dashes.png?raw=true "Insert Dashes Challenge")

<details>
   <summary>Solution</summary>

   <p>
   
   ```js
   function insertDashes(str) {
      return str
         .split(' ')
         .map((word) => word.split('').join('-'))
         .join(' ');
   }
   ```

   </p>

</details>

**********

### Different symbols naive

![different symbols naive](questions/17-different-symbols-naive.png?raw=true "Different symbols naive challenge")

<details>
   
   <summary>Solution 1</summary>

   <p>

   ```js
   function differentSymbolsNaive(str) {
      if (typeof str !== 'string') {
         throw new Error('Invalid input');
      }
      let uniqueChars = '';
      const { length } = str;
      for (let i = 0; i < length; i += 1) {
         if (!uniqueChars.includes(str[i])) {
            uniqueChars += str[i];
         }
      }
      return uniqueChars.length;
   }
   ```

   </p>

</details>

<details>
   
   <summary>Solution 2</summary>

   <p>

   ```js
   function differentSymbolsNaive(str) {
      if (typeof str !== 'string') {
         throw new Error('Invalid input');
      }
      return new Set(str).size;
   }
   ```

   </p>

</details>

<details>
   
   <summary>Solution 3</summary>

   <p>

   ```js
   function differentSymbolsNaive(str) {
      if (typeof str !== 'string') {
         throw new Error('Invalid input');
      }
      const uniqueChars = {};
      return str.split('').reduce((charCount, char) => {
         if (uniqueChars[char]) {
            return charCount;
         }
         uniqueChars[char] = char;
         return charCount + 1;
      }, 0);
   }
   ```

   </p>

</details>

**********

### Array previous less

![array previous less challenge](questions/18-array-previous-less.png?raw=true "Array Previous Less Challenge")

<details>

   <summary>Solution 1</summary>
   <p>

   ```js
   function arrayPreviousLess(nums) {

      if (!Array.isArray(nums)) {
         throw new Error('Invalid input');
      }

      const { length } = nums;
      const arrayClone = [...nums];

      // eslint-disable-next-line no-restricted-syntax
      outerLoop: for (let i = 0; i < length; i += 1) {
         if (typeof nums[i] !== 'number') {
            throw new Error('Invalid input');
         }
         for (let j = i - 1; j >= 0; j -= 1) {
            if (nums[i] > nums[j]) {
            arrayClone[i] = nums[j];
            // eslint-disable-next-line no-continue
            continue outerLoop;
            }
         }
         arrayClone[i] = -1;
      }

      return arrayClone;

   }
   ```
   </p>

</details>

<details>

   <summary>Solution 2</summary>
   <p>

   ```js
   function arrayPreviousLess(nums) {

      if (!Array.isArray(nums)) {
         throw new Error('Invalid input');
      }

      const arrayClone = [...nums];

      nums.forEach((element, index) => {
         if (typeof element !== 'number') {
            throw new Error('Invalid input');
         }
         for (let i = index - 1; i >= 0; i -= 1) {
            if (element > nums[i]) {
            arrayClone[index] = nums[i];
            return;
            }
         }
         arrayClone[index] = -1;
      });

      return arrayClone;
   }
   ```
   </p>

</details>

**********

### Alphabet subsequence

![alphabet subsequence challenge](questions/19-aphabet-subsequence.png?raw=true "Alphabet Subsequence Challenge")

<details>

   <summary>Solution</summary>

   <p>

   ```js
   function alphabetSubsequence(str) {
      if (typeof str !== 'string' || !str.length) {
         throw new Error('Invalid input');
      }

      const lowerCaseStr = str.toLowerCase();
      const lastIndex = str.length - 1;

      for (let i = 0; i < lastIndex; i += 1) {
         const thisCharCode = lowerCaseStr.charCodeAt(i);
         const nextCharCode = lowerCaseStr.charCodeAt(i + 1);
         if (nextCharCode <= thisCharCode) {
            return false;
         }
         if (thisCharCode < 97 || thisCharCode > 122) {
            return false;
         }
      }

      const lastCharCode = lowerCaseStr[lastIndex];
      return !(lastCharCode < 97 || lastCharCode > 122);
   }

   ```
   </p>
   
</details>

**********

### Domain types

![domain types challenge](questions/20-domain-type.png?raw=true "Domain Types Challenge")

<details>

   <summary>Solution</summary>

   <p>

   ```js
   /* eslint-disable consistent-return */
   /* eslint-disable array-callback-return */

   function domainType(domains) {
      return domains.map((domain) => {
         const domainNameComponents = domain.split('.');
         const topLevelDomain = domainNameComponents[domainNameComponents.length - 1];
         switch (topLevelDomain) {
            case 'com':
            return 'commercial';
            case 'org':
            return 'organization';
            case 'net':
            return 'network';
            case 'info':
            return 'information';
            default:
         }
      });
   }
   ```
   </p>

</details>

**********

### Sum of 2


![sum of 2 challenge](questions/21-sum-of-2.png?raw=true "Sum Of 2 Challenge")

<details>
    
   <summary>Solution</summary>

   <p>
   
   ```js
   function sumOfTwo(nums1, nums2, value) {
      for (let i = 0; i < nums1.length; i += 1) {
         for (let j = 0; j < nums2.length; j += 1) {
            if (nums1[i] + nums2[j] === value) {
            return true;
            }
         }
      }
      return false;
   }
   ```
   </p>

</details>

**********

### Extract matrix column

![extract matrix column challenge](questions/22-extract-matrix-column.png?raw=true "Extract Matrix Column Challenge")

<details>

   <summary>Solution</summary>

   <p>
   
   ```js
   function extractMatrixColumn(matrix, column) {
      return matrix.map((row) => row[column]);
   }
   ```
   </p>


</details>

**********

### Tweet Input Component

![tweet input component](questions/23-tweet-input-component.png?raw=true "Tweet Input Component Challenge")

<details>

  <summary> Solution </summary>

  <p>
  
  ```js
   const tweetButton = document.getElementById('btn');
   const form = document.getElementById('form');
   const textArea = document.getElementById('string');
   const tweetCharactersLeftSpan = document.getElementById('tweet-characters-left');
   const tweetCharactersCountWrapper = document.querySelector('.tweet-characters-count-wrapper');
   const warningText = document.querySelector('.warning-text');
   const body = document.querySelector('body');
   const tweetBaseUrl = 'https://twitter.com/intent/tweet';

   function emitWarning(){
      tweetCharactersCountWrapper.classList.add('warning');
   }
   function removeWarning(){
      tweetCharactersCountWrapper.classList.remove('warning');
   }
   function removeWarningText(){
      warningText.classList.remove('display-warning-text');
   }
   function disableTweetButton(){
      tweetButton.classList.add('buttonDisabled');
   }
   function enableTweetButton(){
      tweetButton.classList.remove('buttonDisabled');
   }
   function createTweetHandler(event){
      const tweetCharsLeft = 140 - event.target.value.length
      tweetCharactersLeftSpan.innerText = tweetCharsLeft;
      form.setAttribute('action', `${tweetBaseUrl}?text=${event.target.value}`);
      removeWarningText();
      if(tweetCharsLeft < 21){
         emitWarning();
      }else{
         removeWarning();
      }
      
      if(tweetCharsLeft < 0){
         disableTweetButton();
      }else{
         enableTweetButton(); 
      }   
   }

   function shareTweetHandler(event){
      event.preventDefault(); //Scrimba throws if ommitted
      const charLeft = parseInt(tweetCharactersLeftSpan.innerText);
      if(charLeft < 0){
         warningText.classList.add('display-warning-text');;
         return;
      } 
      console.log('Yay! Message successfully tweeted');
   }

   textArea.addEventListener('input', createTweetHandler);
   tweetButton.addEventListener('click', shareTweetHandler);
  ```

  </p>

</details>

**********

### Test your agility

![test your agility challenge](questions/24-test-your-agility.png?raw=true "Test Your Agility Challenge")

<details>

  <summary>Solution</summary>

  <p>

  ```js
  // HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS
   /* eslint-disable */

   // globals
   let pushed = false; // Has the stop button been pushed - false is default
   let targetInt; // The target number to stop the wheel on
   const spinningElem = document.getElementById('spinning'); // The spinning number

   // event listener
   document.getElementById('buttonPressed').addEventListener('click', buttonPressed);

   // When the stop button is pushed
   function buttonPressed() {
   pushed = true;
   }

   // set the target Int
   function setTargetInt() {
   const targetElem = document.getElementById('targetNum');
   targetInt = Math.floor(Math.random() * 101);
   targetElem.innerHTML = targetInt;
   }

   // sleep const
   const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

   // EDIT THIS FUNCTION
   const spin = async () => {
   // WRITE YOUR CODE HERE
   let counter = 0;
   while (counter < 101) {
      if (pushed === true) {
         stop(counter);
         break;
      } else {
         spinningElem.innerText = counter;
         await sleep(75);
      }
      if (counter === 100) {
         counter = 0;
      }
      counter += 1;
   }
   // Trigger this function when the STOP button has been pushed
   // Paste this wherever you need to sleep the incrimentor
   };

   // EDIT THIS FUNCTION
   function stop(i) {
   // WRITE YOUR CODE HERE
   const stoppedAt = parseInt(spinningElem.innerText);
   const delta = Math.abs(targetInt - stoppedAt);
   const result = document.getElementById('result'); // display your result message here
   if (delta === 0) {
      result.innerText = 'Hooray Merry JavaScriptmass, you won!';
   } else {
      result.innerText = `You are off by ${delta}, please try again`;
   }
   }

   // main
   setTargetInt();
   spin();


  ```


  </p>


</details>
