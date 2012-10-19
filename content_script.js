var answers = { 
    "ApacheCon NA 2011 was hosted in which city?": "Vancouver",
    "ApacheCon NA 2010 was hosted in which city?": "Atlanta",
    "ApacheCon US 2009 was hosted in which city?": "Oakland",
    "ApacheCon EU 2009 was hosted in which city?": "Amsterdam",
    "ApacheCon US 2008 was hosted in which city?": "New Orleans",
    "ApacheCon EU 2008 was hosted in which city?": "Amsterdam",
    "ApacheCon US 2007 was hosted in which city?": "Atlanta",
    "ApacheCon EU 2007 was hosted in which city?": "Amsterdam",
    "ApacheCon US 2006 was hosted in which city?": "Austin",
    "ApacheCon Asia 2006 was hosted in which city?": "Colombo, Sri Lanka",
    "ApacheCon EU 2006 was hosted in which city?": "Dublin",
    "ApacheCon US 2005 was hosted in which city?": "San Diego",
    "ApacheCon EU 2005 was hosted in which city?": "Stuttgart",
    "ApacheCon US 2004 was hosted in which city?": "Las Vegas",
    "ApacheCon US 2003 was hosted in which city?": "Las Vegas",
    "ApacheCon US 2002 was hosted in which city?": "Las Vegas",
    "ApacheCon US 2001 was hosted in which city?": "Santa Clara",
    "ApacheCon EU 2000 was hosted in which city?": "London",
    "ApacheCon US 2000 was hosted in which city?": "Orlando",
    "What color is the sky (usually)?": "Blue",
    "What\'s the opposite of open?": "Closed",
    "Is the ASF a 501(c)3 public charity?": "yes",
    "What US state did the ASF incorporate in?", "Delaware"
};

var question = document.getElementById('textcha-question').innerText;
var answer = document.getElementById('textcha-answer');
if (answers[question] != undefined) {
    answer.value = answers[question];
}
