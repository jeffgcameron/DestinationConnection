const reviewsDiv = document.getElementById("reviews");
const reviewCreatorDiv = document.getElementById("review-creator");
const arrowRight = document.getElementById("arrow-right");
const arrowLeft = document.getElementById("arrow-left");

const reviews = [
  {
    content:
      "I don’t know where to start saying thank you to you gal! You are truly a joy to work with, your efficiency blew me away.  I’m fairly detail oriented but you beat me by a mile. Thank you a hundred times for all you did to make our program such a success and for being who you are!",
    creator: "Cici, August 2008",
  },
  {
    content:
      "Thank you for all you do behind the scenes to make me look good.  And for going way beyond your job scope to take care of me and our group.",
    creator: "David, January 2007",
  },
  {
    content:
      "Where can we start to thank you for leading the way for our absolutely perfect program.  You were incredible to work with. . . Knowledgeable, creative, flexible, unfrazzled and always there for us! Thank you for all the guidance you gave us and your patience through the challenging decisions and logistics.  It was a great experience working with you and the result was a A+++.",

    creator: "Irene and Cindy, August 2009",
  },
  {
    content:"Thank you BIG TIME!" ,

    creator:"Lesley, October 2010" ,
  },
  {
    content:"Thank you so much for all your hard work, good advice and especially your patience. You helped make this experience so special and everything run so smoothly." ,

    creator:"Adam, December 2019" ,
  },
  {
    content:"The site tour was spectacular and we landed the business! We look forward to growing our partnership with you!" ,

    creator:"Tim, February 2013" ,
  },
  {
    content:"The feedback we have received from our attendees was nothing short of extremely positive!  Your extreme dedication to our needs, thorough attention to detail, your professionalism, organization and of course your expertise are top-rated qualities and we sincerely appreciate all that you have done for— we felt you and your team were and extension of our own events team!  You are truly and asset! " ,

    creator:"Janet, March 2003" ,
  },
  {
    content:"You are amazing!! Thank you so much for the table debacle.  Your calm demeanor and quick response turned things around for me." ,

    creator:"Julie, September 2013" ,
  },
  {
    content:"Thank you for making [our client’s] incentive program a huge success.  If it weren’t for you and your persistence during our initial site visit, our group would not have come to Jackson.  I appreciate you! " ,

    creator:"Kara, February 2017" ,
  },
  {
    content:"We can’t thank you enough for all of the time and effort that you have put into planning our program. You have been great to work with and with you handling so many details, we know it will be a great success!" ,

    creator:"Caroline and Katherine, September 2021" ,
  },
  {
    content:"Thank you for all your help again this year.  You make everything very easy! I’m looking forward to working with you again next year and hopefully we’ll finally get to go out and ski together! " ,

    creator:" Paula, March 2016" ,
  },
  {
    content:"Good connecting with you again in another state!  Thanks for all your assistance and flexibility in planning our program and with the many last minute changes." ,

    creator:"Vince, April 2002" ,
  },
  {
    content:"Through your own experience with large groups, you know it is never easy to coordinate game plans and keep everyone happy.  You and your team manage to do just that- - and made it look easy.  You are one of the most unflappable and highly competent individuals I have every had the pleasure to work with.  You deserve a healthy portion of the credit for [international company] booking its unprecedented fifth event at Jackson Hole.  I eagerly anticipate working with you again. " ,

    creator:"Cathy, February 2017" ,
  },
  {
    content:"Year after year, you continue to make our event a success.  You definitely know us and Jackson Hole well (and make us look good)! We honestly could not keep doing this without you and we recognize each and every step you take in making the magic happen! " ,

    creator:"Pedro, March 2018" ,
  },
  {
    content:"Our winning combination program was a “winner”!  Every family had a fantastic trip and that wouldn’t have happened with your contributions! " ,

    creator:"Michael, November 2006" ,
  },
  {
    content:"I would like to thank you for another successful winter season.  We enjoy partnering with you and greatly appreciate your hard work, patience, and overall contribution to our business.  Your continued leadership with this big groups enables us to set a high standard of quality, service and professionalism, ultimately exceeding guests’ expectations. " ,

    creator:"Jessica, local partner since 2005" ,
  },
];

console.log(reviews.length);

function displayReviews() {
  let i = 0;

  reviewsDiv.textContent = reviews[i].content;
  reviewCreatorDiv.textContent = reviews[i].creator;

  console.log(i);

  arrowRight.addEventListener("click", nextReview);
  arrowLeft.addEventListener("click", previousReview);

  function nextReview() {
    if (i >= reviews.length - 1 ) {
      i = 0;
      reviewsDiv.textContent = reviews[i].content;
      reviewCreatorDiv.textContent = reviews[i].creator;
      console.log(i);
    } else {
      i++;
      console.log(i);
      reviewsDiv.textContent = reviews[i].content;
      reviewCreatorDiv.textContent = reviews[i].creator;
      
    }
    clearInterval(reviewInterval);
    reviewInterval = setInterval(reviewLoop, 7500);
  }

  function previousReview() {
    console.log(i);
    if (i === 0) {
      i = reviews.length - 1;
      reviewsDiv.textContent = reviews[i].content;
      reviewCreatorDiv.textContent = reviews[i].creator;
    } else {
      i--;
      reviewsDiv.textContent = reviews[i].content;
      reviewCreatorDiv.textContent = reviews[i].creator;
      
    }

    clearInterval(reviewInterval);
    reviewInterval = setInterval(reviewLoop, 7500);
  }

  let reviewInterval = setInterval(reviewLoop, 7500);

  function reviewLoop() {
    // console.log(i);
    if (i === reviews.length) {
      clearInterval(reviewInterval);
      displayReviews();
    } else {
      
      reviewsDiv.textContent = reviews[i].content;
      reviewCreatorDiv.textContent = reviews[i].creator;
      i++;
    }
  }
}
//   const reviewInterval = setInterval(function () {

//     if (reviews[i] === undefined) {
//         clearInterval(reviewInterval);
//         displayReviews()
//     } else {
//       reviewsDiv.textContent = reviews[i].content;
//       reviewCreatorDiv.textContent = reviews[i].creator
//       i++;
//     }
//   }, 10000);
// }

displayReviews();

// console.log(reviews);
// const reviews = [
//   "Thank you for all you do behind the scenes to make me look good.  And for going way beyond your job scope to take care of me and our group. -David, January 2007",
//   "I don’t know where to start saying thank you to you gal! You are truly a joy to work with, your efficiency blew me away.  I’m fairly detail oriented but you beat me by a mile. Thank you a hundred times for all you did to make our program such a success and for being who you are! -Cici August, 2008",
//   "Where can we start to thank you for leading the way for our absolutely perfect program.  You were incredible to work with. . . Knowledgeable, creative, flexible, unfrazzled and always there for us! Thank you for all the guidance you gave us and your patience through the challenging decisions and logistics.  It was a great experience working with you and the result was a A+++. -Irene and Cindy, August 2009",
//   "Thank you BIG TIME! -Lesley October 2010",
// ];
