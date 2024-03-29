import * as aT from "../utils/actionTypes";

const update = (prevState, newState) => ({ ...prevState, ...newState });
// crawl_status = "success" || "err" || "wait"

const indexOfFirst = ({articles, status }) => {
    for(let i=0 ; i< articles.length; i++){
        if(articles[i].crawl_status === status ){
            return i;
        }
    }
    return articles.length;
}


const indexOfArticleId = ({articles, id }) => {
    for(let i=0 ; i< articles.length; i++){
        if(articles[i].id === id ){
            return i;
        }
    }
    return undefined;
}

const dummy = [
    {
        "@context": "http://schema.org",
        "@type": "NewsArticle",
        image: [
            "https://miro.medium.com/max/1200/1*tMOJBSqKfYd9M2zOskluFw.png"
        ],
        url: "https://medium.com/free-code-camp/5-key-learnings-from-the-post-bootcamp-job-search-9a07468d2331",
        dateCreated: "2016-11-19T16:48:30.365Z",
        datePublished: "2016-11-19T16:48:30.365Z",
        dateModified: "2019-01-21T06:33:37.909Z",
        headline: "[DUMMY]: I spent 3 months applying to jobs after a coding bootcamp. Here’s what I learned.",
        name: "I spent 3 months applying to jobs after a coding bootcamp. Here’s what I learned.",
        description: "A less-talked about part of the bootcamper’s journey is what happens after you graduate — when you’re searching for that six-figure developer position. I completed Hack Reactor in July 2016 and took…",
        identifier: "9a07468d2331",
        keywords: [
            "Tech",
            "Startup",
            "Programming",
            "Self Improvement",
            "Life Lessons"
        ],
        author: {
            "@type": "Person",
            name: "Felix Feng",
            url: "https://medium.com/@felixfeng"
        },
        creator: [
            "Felix Feng"
        ],
        publisher: {
            "@type": "Organization",
            name: "freeCodeCamp.org",
            url: "https://medium.com/free-code-camp",
            logo: {
                "@type": "ImageObject",
                width: 500,
                height: 60,
                url: "https://miro.medium.com/max/500/1*wViBNJ1o9rM5p6b-gf3vxg.png"
            }
        },
        mainEntityOfPage: "https://medium.com/free-code-camp/5-key-learnings-from-the-post-bootcamp-job-search-9a07468d2331",
        blog: "I spent 3 months applying to jobs after a coding bootcamp. Here’s what I learned.Felix FengFollowNov 19, 2016 · 6 min readA less-talked about part of the bootcamper’s journey is what happens after you graduate — when you’re searching for that six-figure developer position.< 3% of applications became offersI completed Hack Reactor in July 2016 and took almost 3 months before accepting an offer with Radius Intelligence. I applied to 291 companies, did 32 phone screens, 16 technical screens, 13 coding challenges, 11 on-sites, and received 8 offers. The offers ranged from $60-125k in salary from companies all over the US, and for both front end and full stack roles. In total, 2.8% of applications became offers.Here are 5 things I wish I’d known before I began my job search.Insight #1: Get through to real peopleAt first, I applied for companies using the shotgun approach. I applied through Indeed.com, AngelList, LinkedIn, StackOverflow, Hacker News, company websites, and even Craigslist.I’d submit a resume for any role that wanted React, Node, or JavaScript experience. In the first week, I applied to 15–20 companies a day.Pro-Tip: Find companies using this easy-application repo.My yield was low. Less than five percent of companies responded to me. I was throwing applications into a black hole.Everything changed when one of my cohort-mates, a former recruiter, shared a guide to the job search. He told us to send emails directly to real people with each application. It could be anybody. As long as someone read it.From then on, whenever I submitted an application, I searched for the company on LinkedIn and emailed someone on their engineering or hiring team.For most small companies or C-level executives, the email format is usually firstName@dreamCompany.com. For larger companies, it may be firstName.lastName@dreamCompany.com.To verify emails, I used Rapportive to cross-check emails with social media accounts.The results were amazing. With 150+ emails sent, my response rate was a whopping 22%.It also felt great to hear from real people. Surprisingly, CEOs and CTOs responded to me. Sometimes they even interviewed me themselves.Takeaway: If you’re applying through the front door, make sure you’re getting to human beings.Insight #2: Start small and work your way upYou will face Level 1 interviews (a non-tech company that needs any dev), where interviewers ask you nothing more than JavaScript trivia.You will face Level 9 interviews (Google/Facebook level), where interviewers ask difficult data structure and algorithm questions.I strategically set up my process so that I had lower-level interviews earlier, and higher-level interviews later on.Early on, I gained experience, built confidence, and secured offers from companies that had less intensive interviews.As I got more experience, I effectively “leveled up.” I became capable of completing interviews at companies with higher hiring bars. This is illustrated below as a linear correlation between the number of weeks I was into the process and the base salary I was offered.There’s a direct correlation between time spent interviewing and offer salary.I unlocked tougher questions. I unlocked higher salaries. And eventually, I unlocked the job I took.Takeaway: Plan to tackle easier interviews early on and more difficult ones later on.Insight #3: Study like your future job depends on it (because it does)I hate to break it to you, but the most important thing you could be doing at any point is studying and preparing.Why? Because you won’t get the offer if you don’t have good answers to the questions they ask you.People won’t refer you if they don’t think you’re prepared for their interviews.Coming out of Hack Reactor, my weaknesses were data structures and algorithms. A study by Triplebyte has found that bootcamp grads are weaker in these areas than computer science grads.So I learned and practiced. Every day.I devoted entire days to learning sorting algorithms. Other days, I focused on understanding how the internet worked.If I didn’t fully understand a concept, I’d spend the day watching YouTube videos or searching StackOverflow until I did.I found the following study materials useful:InterviewCake: My favorite resource for data structures and algorithms. It breaks down solutions into step-by-step chunks — a great alternative to Cracking the Code Interview (CTCI). My only gripe is that they don’t have more problems!HiredInTech’s System Design Section: A great guide for system design interview questions.Coderust: If you’re avoiding CTCI like the plague, Coderust 2.0 may be perfect for you. For $49, you get solutions in almost any programming language, with interactive diagrams.Reddit’s How to Prepare for Tech Interviews: I constantly used this as a benchmark for how prepared I was.Front End Interview Questions: An exhaustive list of front-end questions.Leetcode: The go-to resource for algorithm and data structure questions. You can filter by company, so for example, you could get all the questions that Uber or Google typically ask.Takeaway: There’s no such thing as too much preparation.Insight #4: Put your best foot forwardBreaking into the industry is hard. You have to perform well, even when you’re not fully prepared. In order to succeed, you have to be your own advocate.Sell YourselfAt Hack Reactor, we’re trained to mask our inexperience. In our personal narratives, we purposely omit our bootcamp education.Why? Otherwise, companies automatically categorize us into junior developer roles or tag us as “not enough experience.”In one interview with a startup, the interview immediately went south once they realized I’d done a bootcamp. One company used it against me and made me a $60k offer, benchmarking against junior developers.Ultimately, you need to convince companies that you can do the job.At the same time, you need to convince yourself that you can do the job.You can. Focus on your love for programming. Focus on what you’ve built with React and Node. Focus on demonstrating your deep knowledge in JavaScript and any other languages you’ve learned.Only then can they justify giving you the job.It’s a Two-way ConversationInterviewing is a mutual exploration of fit between an employee and an employer. While it’s your job to convince employers to hire you, it’s also their job to win you over.Don’t be ashamed of using the interview as an opportunity to evaluate the job opportunity.I talked to any company, even if I had only the slightest interest.I did on-sites all over the country with any company that invited me out. I asked questions, and sucked up knowledge on engineering team organization, technologies and tools used, company challenges, and system architecture.Pro-Tip: During interviews, ask the following questions:What are some technical challenges you’ve recently faced?What do you enjoy about working at X company?How are teams structured and how are tasks usually divided?I treated every interaction as a learning opportunity. Each interaction helped me improve my presentation, interview, and technical skills. Each failure helped me find my blind spots.Takeaway: Don’t sell yourself short! And remember, it’s a mutual exploration.Insight #5: It’s a marathon, not a sprintThe journey is by no means easy. For 3 months, I grinded 6 days a week. But I tried to take care of myself.What a typical day could look like in JavaScriptSome days, I’d study with friends. Other days, I’d go find a cafe and study alone, or hang out at Hack Reactor’s alumni lounge. And every week I’d check in with our career counselor to talk about my progress.It’s easy to burn out during the process. Eat well, sleep, and exercise.It can get lonely. Spend time with friends who are going through the same experience.Takeaway: Prepare for the long game and make sure you take care of yourself.In summary, the key takeaways are:Get through to real peopleStart small and work your way upStudy like your future job depends on itPut your best foot forwardIt’s a marathon, not a sprintThe process may seem endless, but you’re going to make it. Keep putting in the hours. Keep sending in the applications. Keep taking caring of yourself. All of it pays off in the end.A special thanks to Dylan Tran, Karen Zhao, Rohit 'Sunny' Rekhi, Jake Pace, Anamita Guha, Stephanie Liu, and many others.Please share this with friends going through the job search. If you like what you read, hit that ❤ button below.",
        fetch_time: 6684,
        blog_html:
          '<section class="di dj dk dl ak dm bw n dn"></section><span class="r"></span><div><div class="do u dp dq dr ds"></div><div class="dk dl dm gf"><div class="r h g f e"><aside class="qz do t" style="width: 768px;"><div class="rc rd do re ck ak"><h4 class="as cu cv au ax"><span class="bx rd ck cc fe">Top highlight</span></h4></div></aside></div></div><section class="dt du dv dw dx"><div class="n p"><div class="ac ae af ag ah dy aj ak"><div><div id="be18" class="dz ea eb at ec b ed ee ef eg eh ei ej"><h1 class="ec b ed ek eb">Stop Using i++ in Your Loops</h1></div></div><div id="1fe5" class="el ea ax at as cu em en eo ep eq er es"><h2 class="as cu et eu ax">Why ++i is often better than i++ (pre-increment vs. post-increment)</h2></div><div class="ev"><div class="o n"><div><a rel="noopener" href="/@devins?source=post_page-----1f906520d548----------------------"><img alt="Devin Soni" class="r ew ex ey" src="https://miro.medium.com/fit/c/48/48/1*_HRPuvQHh542wLZwyMKQlg.png" width="48" height="48"></a></div><div class="ez ak r"><div class="n"><div style="flex: 1 1 0%;"><span class="as b at au av aw r eb q"><div class="fa n o fb"><span class="as cu fc au cc fd fe ff fg fh eb"><a class="cy cz bb bc bd be bf bg bh bi fi bl bm dc dd" rel="noopener" href="/@devins?source=post_page-----1f906520d548----------------------">Devin Soni</a></span><div class="fj r ap h"><button class="fk eb q bq fl fm fn fo bi dc fp fq fr fs ft fu bt as b at fv cv aw bu bv bw bx by bl">Follow</button></div></div></span></div></div><span class="as b at au av aw r ax ay"><span class="as cu fc au cc fd fe ff fg fh ax"><div><a class="cy cz bb bc bd be bf bg bh bi fi bl bm dc dd" rel="noopener" href="/better-programming/stop-using-i-in-your-loops-1f906520d548?source=post_page-----1f906520d548----------------------">Nov 7</a> · 2 min read<span style="padding-left: 4px;"><svg class="star-15px_svg__svgIcon-use" width="15" height="15" viewBox="0 0 15 15" style="margin-top: -2px;"><path d="M7.44 2.32c.03-.1.09-.1.12 0l1.2 3.53a.29.29 0 0 0 .26.2h3.88c.11 0 .13.04.04.1L9.8 8.33a.27.27 0 0 0-.1.29l1.2 3.53c.03.1-.01.13-.1.07l-3.14-2.18a.3.3 0 0 0-.32 0L4.2 12.22c-.1.06-.14.03-.1-.07l1.2-3.53a.27.27 0 0 0-.1-.3L2.06 6.16c-.1-.06-.07-.12.03-.12h3.89a.29.29 0 0 0 .26-.19l1.2-3.52z"></path></svg></span></div></span></span></div></div></div><figure class="fx fy fz ga gb gc dk dl paragraph-image"><div class="gd ge gf gg ak"><div class="dk dl fw"><div class="gm r gf gn"><div class="go r"><div class="gh gi do t u gj ak cc gk gl"><img class="do t u gj ak gp gq aq ui" src="https://miro.medium.com/max/30/0*spWyBwNlrLhUc3Ie?q=20" width="5184" height="3456" role="presentation"></div><img class="mj rf do t u gj ak gs" width="5184" height="3456" role="presentation" src="https://miro.medium.com/max/5184/0*spWyBwNlrLhUc3Ie"><noscript></noscript></div></div></div></div><figcaption class="ax fc gt gu gv dm dk dl gw gx as cu" data-selectable-paragraph="">Photo by <a href="https://unsplash.com/@codestorm?utm_source=medium&amp;utm_medium=referral" class="cy by gy gz ha hb" target="_blank" rel="noopener nofollow">Safar Safarov</a> on <a href="https://unsplash.com?utm_source=medium&amp;utm_medium=referral" class="cy by gy gz ha hb" target="_blank" rel="noopener nofollow">Unsplash</a></figcaption></figure></div></div></section><hr class="hc cu hd he hf gv hg hh hi hj hk"><section class="dt du dv dw dx"><div class="n p"><div class="ac ae af ag ah dy aj ak"><h1 id="94f6" class="hl hm eb at as hn ho hp hq hr hs ht hu hv hw hx hy" data-selectable-paragraph="">Introduction</h1><p id="8693" class="hz ia eb at ib b ic id ie if ig ih ii ij ik il im" data-selectable-paragraph="">If you’ve written a for-loop before, then you have almost definitely used <code class="gn in io ip iq b">i++</code> before to increment your loop variable.</p><p id="54f0" class="hz ia eb at ib b ic ir ie is ig it ii iu ik iv im" data-selectable-paragraph="">However, have you ever thought about <em class="iw">why</em> you choose to do it like that?</p><p id="51dc" class="hz ia eb at ib b ic ir ie is ig it ii iu ik iv im" data-selectable-paragraph="">Clearly, the end result of <code class="gn in io ip iq b">i++</code> is that <code class="gn in io ip iq b">i</code> is one higher than it was before — which is what we want. But, there are many ways to accomplish this, such as <code class="gn in io ip iq b">++i</code>, <code class="gn in io ip iq b">i++</code>, and even <code class="gn in io ip iq b">i = i + 1</code>.</p><p id="5a02" class="hz ia eb at ib b ic ir ie is ig it ii iu ik iv im" data-selectable-paragraph="">In this article, I will cover two methods of adding 1, <code class="gn in io ip iq b">++i</code>, and <code class="gn in io ip iq b">i++</code>, and explain why <code class="gn in io ip iq b">++i</code> may be better than <code class="gn in io ip iq b">i++</code> in most situations.</p></div></div></section><hr class="hc cu hd he hf gv hg hh hi hj hk"><section class="dt du dv dw dx"><div class="n p"><div class="ac ae af ag ah dy aj ak"><h1 id="5844" class="hl hm eb at as hn ho hp hq hr hs ht hu hv hw hx hy" data-selectable-paragraph="">Post-Increment (i++)</h1><p id="4149" class="hz ia eb at ib b ic id ie if ig ih ii ij ik il im" data-selectable-paragraph="">The <code class="gn in io ip iq b">i++</code> method, or post-increment, is the most common way.</p><p id="18c0" class="hz ia eb at ib b ic ir ie is ig it ii iu ik iv im" data-selectable-paragraph="">In psuedocode, the post-increment operator looks roughly as follows for a variable <code class="gn in io ip iq b">i</code>:</p><pre class="fx fy fz ga gb ix iy cl"><span id="d566" class="iz hm eb at iq b fc ja jb r jc" data-selectable-paragraph="">int j = i;<br>i = i + 1;<br>return j;</span></pre><p id="cc08" class="hz ia eb at ib b ic ir ie is ig it ii iu ik iv im" data-selectable-paragraph="">Since the post-increment operator has to return the original value of <code class="gn in io ip iq b">i</code>, and not the incremented value <code class="gn in io ip iq b">i + 1</code>, it has to store the old version of <code class="gn in io ip iq b">i</code>.</p><p id="0a59" class="hz ia eb at ib b ic ir ie is ig it ii iu ik iv im" data-selectable-paragraph="">This means that it typically needlessly uses additional memory to store that value, since, in most cases, we do not actually use the old version of <code class="gn in io ip iq b">i</code>, and it is simply discarded.</p></div></div></section><hr class="hc cu hd he hf gv hg hh hi hj hk"><section class="dt du dv dw dx"><div class="n p"><div class="ac ae af ag ah dy aj ak"><h1 id="daaa" class="hl hm eb at as hn ho hp hq hr hs ht hu hv hw hx hy" data-selectable-paragraph="">Pre-Increment (++i)</h1><p id="0f10" class="hz ia eb at ib b ic id ie if ig ih ii ij ik il im" data-selectable-paragraph="">The <code class="gn in io ip iq b">++i</code> method, or pre-increment, is much less common and is typically used by older programmers in languages such as C and C++.</p><p id="34fc" class="hz ia eb at ib b ic ir ie is ig it ii iu ik iv im" data-selectable-paragraph="">In psuedocode, the pre-increment operator looks roughly like this for a variable <code class="gn in io ip iq b">i</code>:</p><pre class="fx fy fz ga gb ix iy cl"><span id="3ad9" class="iz hm eb at iq b fc ja jb r jc" data-selectable-paragraph="">i = i + 1;<br>return i;</span></pre><p id="a847" class="hz ia eb at ib b ic ir ie is ig it ii iu ik iv im" data-selectable-paragraph="">Notably, here, we do not have to save the old value of <code class="gn in io ip iq b">i</code> — we can simply add to it and return. This aligns much better with the typical use-case in a for-loop, since we rarely need the old value of <code class="gn in io ip iq b">i</code> in that context.</p></div></div></section><hr class="hc cu hd he hf gv hg hh hi hj hk"><section class="dt du dv dw dx"><div class="n p"><div class="ac ae af ag ah dy aj ak"><h1 id="88ec" class="hl hm eb at as hn ho hp hq hr hs ht hu hv hw hx hy" data-selectable-paragraph="">Caveats</h1><p id="d88e" class="hz ia eb at ib b ic id ie if ig ih ii ij ik il im" data-selectable-paragraph="">After seeing the difference between post-increment and pre-increment, one might notice that, since the cached value of <code class="gn in io ip iq b">i</code> is never used in post-increment, the compiler will just optimize that line away, making the two operators equivalent.</p><p id="734a" class="hz ia eb at ib b ic ir ie is ig it ii iu ik iv im" data-selectable-paragraph="">This is most likely true for primitive types, such as an integer.</p><p id="141f" class="hz ia eb at ib b ic ir ie is ig it ii iu ik iv im" data-selectable-paragraph="">However, for more complex types, such as user-defined types or iterators with the <code class="gn in io ip iq b">+</code> operation overloaded, the compiler may not be able to safely optimize the caching operation.</p><p id="8979" class="hz ia eb at ib b ic ir ie is ig it ii iu ik iv im" data-selectable-paragraph=""><mark class="ra rb jx">So, it seems that in most cases, the pre-increment operator is better than, or equal to, the post-increment operator, as long as you do not need the previous value of whatever you are incrementing.</mark></p></div></div></section></div>',
        blog_style: [
          "",
          "html{box-sizing:border-box}*, *:before, *:after{box-sizing:inherit}body{margin:0;padding:0;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;color:rgba(0,0,0,0.8);position:relative;min-height:100vh}h1, h2, h3, h4, h5, h6, dl, dd, ol, ul, menu, figure, blockquote, p, pre, form{margin:0}menu, ol, ul{padding:0;list-style:none;list-style-image:none}main{display:block}a{color:inherit;text-decoration:none}a, button, input{-webkit-tap-highlight-color:transparent}img, svg{vertical-align:middle}button{background:transparent;overflow:visible}button, input, optgroup, select, textarea{margin:0}",
          "@-webkit-keyframes k1{0%{transform:scale(1);opacity:1}70%{transform:scale(1.4);opacity:0}100%{opacity:0}}@-moz-keyframes k1{0%{transform:scale(1);opacity:1}70%{transform:scale(1.4);opacity:0}100%{opacity:0}}@keyframes k1{0%{transform:scale(1);opacity:1}70%{transform:scale(1.4);opacity:0}100%{opacity:0}}@-webkit-keyframes k1{0%{transform:scale(1);opacity:1}70%{transform:scale(1.4);opacity:0}100%{opacity:0}}@-moz-keyframes k1{0%{transform:scale(1);opacity:1}70%{transform:scale(1.4);opacity:0}100%{opacity:0}}@keyframes k1{0%{transform:scale(1);opacity:1}70%{transform:scale(1.4);opacity:0}100%{opacity:0}}@-webkit-keyframes k2{0%{transform:translateY(100%)}90%{transform:translateY(-5%)}100%{transform:translateY(0%)}}@-moz-keyframes k2{0%{transform:translateY(100%)}90%{transform:translateY(-5%)}100%{transform:translateY(0%)}}@keyframes k2{0%{transform:translateY(100%)}90%{transform:translateY(-5%)}100%{transform:translateY(0%)}}@-webkit-keyframes k3{0%{transform:translateY(0%);opacity:1}10%{transform:translateY(-5%);opacity:1}100%{transform:translateY(100%);opacity:0}}@-moz-keyframes k3{0%{transform:translateY(0%);opacity:1}10%{transform:translateY(-5%);opacity:1}100%{transform:translateY(100%);opacity:0}}@keyframes k3{0%{transform:translateY(0%);opacity:1}10%{transform:translateY(-5%);opacity:1}100%{transform:translateY(100%);opacity:0}}",
          `.a{font-family:medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif}.b{font-weight:400}.c{background-color:rgba(255, 255, 255, 1)}.l{height:100vh}.m{width:100vw}.n{display:flex}.o{align-items:center}.p{justify-content:center}.q{fill:rgba(0, 0, 0, 0.84)}.r{display:block}.s{position:fixed}.t{top:0}.u{left:0}.v{right:0}.w{z-index:500}.x{box-shadow:0 4px 12px 0 rgba(0, 0, 0, 0.05)}.ai{max-width:1192px}.aj{min-width:0}.ak{width:100%}.al{height:65px}.ao{flex:1 0 auto}.ap{flex:0 0 auto}.aq{visibility:hidden}.ar{margin-left:16px}.as{font-family:medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif}.at{font-style:normal}.au{line-height:20px}.av{font-size:15.8px}.aw{letter-spacing:0px}.ax{color:rgba(0, 0, 0, 0.54)}.ay{fill:rgba(0, 0, 0, 0.54)}.az{color:rgba(28, 153, 99, 1)}.ba{fill:rgba(2, 184, 117, 1)}.bb{font-size:inherit}.bc{border:inherit}.bd{font-family:inherit}.be{letter-spacing:inherit}.bf{font-weight:inherit}.bg{padding:0}.bh{margin:0}.bi:hover{cursor:pointer}.bj:hover{color:rgba(11, 59, 40, 1)}.bk:hover{fill:rgba(28, 153, 99, 1)}.bl:focus{outline:none}.bm:disabled{cursor:default}.bn:disabled{color:rgba(3, 168, 124, 0.5)}.bo:disabled{fill:rgba(3, 168, 124, 0.5)}.bp{padding:8px 16px}.bq{background:0}.br{border-color:rgba(2, 184, 117, 1)}.bs:hover{border-color:rgba(28, 153, 99, 1)}.bt{border-radius:4px}.bu{border-width:1px}.bv{border-style:solid}.bw{box-sizing:border-box}.bx{display:inline-block}.by{text-decoration:none}.bz{border-top:1px solid rgba(0, 0, 0, 0.1)}.cb{height:54px}.cc{overflow:hidden}.cd{margin-right:40px}.ce{height:36px}.cf{width:270px}.cg{overflow:auto}.ch{flex:0 1 auto}.ci{list-style-type:none}.cj{line-height:40px}.ck{white-space:nowrap}.cl{overflow-x:auto}.cm{align-items:flex-start}.cn{margin-top:20px}.co{padding-top:20px}.cp{height:80px}.cq{height:20px}.cr{margin-right:15px}.cs{margin-left:15px}.ct:first-child{margin-left:0}.cu{font-weight:300}.cv{font-size:15px}.cw{text-transform:uppercase}.cx{letter-spacing:1px}.cy{color:inherit}.cz{fill:inherit}.da:hover{color:rgba(0, 0, 0, 0.9)}.db:hover{fill:rgba(0, 0, 0, 0.9)}.dc:disabled{color:rgba(0, 0, 0, 0.54)}.dd:disabled{fill:rgba(0, 0, 0, 0.54)}.de{margin-bottom:0px}.df{height:119px}.di{padding-left:24px}.dj{padding-right:24px}.dk{margin-left:auto}.dl{margin-right:auto}.dm{max-width:728px}.dn{flex-direction:column}.do{position:absolute}.dp{top:calc(100vh + 100px)}.dq{bottom:calc(100vh + 100px)}.dr{width:10px}.ds{pointer-events:none}.dt{word-break:break-word}.du{word-wrap:break-word}.dv:after{display:block}.dw:after{content:""}.dx:after{clear:both}.dy{max-width:680px}.dz{line-height:1.23}.ea{letter-spacing:0}.eb{color:rgba(0, 0, 0, 0.84)}.ec{font-family:medium-content-title-font, Georgia, Cambria, "Times New Roman", Times, serif}.ed{font-size:40px}.ej{margin-bottom:-0.27em}.ek{line-height:48px}.el{line-height:1.394}.em{font-size:25px}.es{margin-bottom:-0.42em}.et{font-size:24px}.eu{line-height:32px}.ev{margin-top:32px}.ew{border-radius:50%}.ex{height:48px}.ey{width:48px}.ez{margin-left:12px}.fa{margin-bottom:2px}.fc{font-size:16px}.fd{max-height:20px}.fe{text-overflow:ellipsis}.ff{display:-webkit-box}.fg{-webkit-line-clamp:1}.fh{-webkit-box-orient:vertical}.fi:hover{text-decoration:underline}.fj{margin-left:8px}.fk{padding:0px 8px}.fl{border-color:rgba(0, 0, 0, 0.54)}.fm:hover{color:rgba(0, 0, 0, 0.97)}.fn:hover{fill:rgba(0, 0, 0, 0.97)}.fo:hover{border-color:rgba(0, 0, 0, 0.84)}.fp:disabled{fill:rgba(0, 0, 0, 0.76)}.fq:disabled{border-color:rgba(0, 0, 0, 0.2)}.fr:disabled{cursor:inherit}.fs:disabled:hover{color:rgba(0, 0, 0, 0.54)}.ft:disabled:hover{fill:rgba(0, 0, 0, 0.76)}.fu:disabled:hover{border-color:rgba(0, 0, 0, 0.2)}.fv{line-height:18px}.fw{max-width:5184px}.gc{clear:both}.gd{transition:transform 300ms cubic-bezier(0.2, 0, 0.2, 1)}.ge{cursor:zoom-in}.gf{position:relative}.gg{z-index:auto}.gh{opacity:0}.gi{transition:opacity 100ms 400ms}.gj{height:100%}.gk{will-change:transform}.gl{transform:translateZ(0)}.gm{margin:auto}.gn{background-color:rgba(0, 0, 0, 0.05)}.go{padding-bottom:66.66666666666667%}.gp{filter:blur(20px)}.gq{transform:scale(1.1)}.gr{visibility:visible}.gs{background:rgba(255, 255, 255, 1)}.gt{line-height:1.4}.gu{margin-top:10px}.gv{text-align:center}.gy{background-repeat:repeat-x}.gz{background-image:linear-gradient(to right,rgba(0, 0, 0, 0.84) 100%,rgba(0, 0, 0, 0.84) 0);background-image:url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgba(0, 0, 0, 0.84)" /></svg>')}.ha{background-size:1px 1px}.hb{background-position:0 1.05em;background-position:0 calc(1em + 1px)}.hc{font-family:medium-content-slab-serif-font, Georgia, Cambria, "Times New Roman", Times, serif}.hd{font-size:28px}.he{border:none}.hf{margin-top:30px}.hg:before{content:"..."}.hh:before{letter-spacing:0.6em}.hi:before{text-indent:0.6em}.hj:before{font-style:italic}.hk:before{line-height:1.4}.hl{line-height:1.12}.hm{letter-spacing:-0.022em}.hn{font-weight:600}.hy{margin-bottom:-0.28em}.hz{line-height:1.58}.ia{letter-spacing:-0.004em}.ib{font-family:medium-content-serif-font, Georgia, Cambria, "Times New Roman", Times, serif}.im{margin-bottom:-0.46em}.in{padding:2px 4px}.io{font-size:75%}.ip> strong{font-family:inherit}.iq{font-family:Menlo, Monaco, "Courier New", Courier, monospace}.iw{font-style:italic}.ix{padding:20px}.iy{background:rgba(0, 0, 0, 0.05)}.iz{line-height:1.18}.ja{margin-top:-0.09em}.jb{margin-bottom:-0.09em}.jc{white-space:pre-wrap}.jd{will-change:opacity}.je{top:calc(65px + 54px + 40px)}.jh{width:131px}.ji{padding-bottom:28px}.jj{border-bottom:1px solid rgba(0, 0, 0, 0.1)}.jk{font-size:18px}.jl{padding-bottom:20px}.jm{padding-top:2px}.jn{max-height:120px}.jo{-webkit-line-clamp:6}.jp{padding:4px 12px}.jq{padding-top:28px}.jr{margin-bottom:19px}.js{margin-left:-5px}.jt{margin-right:5px}.ju{outline:0}.jv{border:0}.jw{user-select:none}.jx{cursor:pointer}.jy> svg{pointer-events:none}.jz:active{border-style:none}.ka{-webkit-user-select:none}.kb:focus{fill:rgba(28, 153, 99, 1)}.kc{margin-top:5px}.kd button{text-align:left}.ke{width:188px}.kf{left:50%}.kg{transform:translateX(406px)}.kh{top:calc(65px + 54px + 14px)}.kj{margin-top:40px}.kk{flex-wrap:wrap}.kl{margin-top:25px}.km{margin-right:8px}.kn{margin-bottom:8px}.ko{border-radius:3px}.kp{padding:5px 10px}.kq{line-height:22px}.kr{margin-top:15px}.ks{justify-content:space-between}.kt{margin-right:16px}.ku{border:1px solid rgba(0, 0, 0, 0.1)}.kv{height:60px}.kw{width:60px}.lj:active{border-style:solid}.lk{z-index:2}.lm{padding-right:8px}.ln{display:none}.lo{padding-top:32px}.lp{margin-bottom:25px}.lq{margin-bottom:32px}.lr{min-height:80px}.lw{width:80px}.lx{padding-left:102px}.lz{letter-spacing:0.05em}.ma{margin-bottom:6px}.mb{line-height:36px}.mc{max-width:555px}.md{max-width:450px}.me{line-height:24px}.mg{max-width:550px}.mh{padding-top:25px}.mi{color:rgba(0, 0, 0, 0.76)}.mj{opacity:1}.mk{border:1px solid rgba(2, 184, 117, 1)}.ml{margin-top:64px}.mm{background-color:rgba(0, 0, 0, 0.02)}.mn{padding:60px 0}.mo{background-color:rgba(0, 0, 0, 0.9)}.nf{padding-bottom:48px}.ng{border-bottom:1px solid rgba(255, 255, 255, 0.54)}.nh{margin:0 -12px}.ni{margin:0 12px}.nj{flex:1 1 0}.nk{padding-bottom:12px}.nl:hover{color:rgba(255, 255, 255, 0.99)}.nm:hover{fill:rgba(255, 255, 255, 0.99)}.nn:disabled{color:rgba(255, 255, 255, 0.7)}.no:disabled{fill:rgba(255, 255, 255, 0.7)}.np{color:rgba(255, 255, 255, 0.98)}.nq{fill:rgba(255, 255, 255, 0.98)}.nr{text-align:inherit}.ns{font-size:21.6px}.nt{letter-spacing:-0.32px}.nu{color:rgba(255, 255, 255, 0.7)}.nv{fill:rgba(255, 255, 255, 0.7)}.nw{text-decoration:underline}.nx{padding-bottom:8px}.ny{padding-top:8px}.nz{width:200px}`,
          ".d{display:none}.ah{margin:0 64px}.ei{margin-top:0.78em}.er{margin-top:0.74em}.gb{margin-top:56px}.hw{font-size:34px}.hx{margin-top:1.25em}.ik{font-size:21px}.il{margin-top:0.86em}.iv{margin-top:2em}.nc{padding-left:64px}.nd{padding-right:64px}.ne{max-width:1320px}",
          ".e{display:none}.gw{margin-left:auto}.gx{text-align:center}.mz{padding-left:64px}.na{padding-right:64px}.nb{max-width:1080px}",
          ".f{display:none}.mw{padding-left:48px}.mx{padding-right:48px}.my{max-width:904px}",
          ".g{display:none}.am{height:56px}.an{display:flex}.ca{display:block}.dg{margin-bottom:0px}.dh{height:110px}.ls{margin-bottom:24px}.lt{align-items:center}.lu{width:102px}.lv{position:relative}.ly{padding-left:0}.mf{margin-top:24px}.mp{padding:32px 0}.mt{padding-left:24px}.mu{padding-right:24px}.mv{max-width:728px}.oa{width:140px}",
          ".h{display:none}.ac{margin:0 24px}.ee{margin-top:0.39em}.en{margin-top:0.42em}.fb{margin-bottom:0px}.fx{margin-top:40px}.ho{font-size:30px}.hp{margin-top:0.93em}.ic{font-size:18px}.id{margin-top:0.67em}.ir{margin-top:1.56em}.mq{padding-left:24px}.mr{padding-right:24px}.ms{max-width:552px}",
          ".i{display:none}.ag{margin:0 64px}.eh{margin-top:0.78em}.eq{margin-top:0.74em}.ga{margin-top:56px}.hu{font-size:34px}.hv{margin-top:1.25em}.ii{font-size:21px}.ij{margin-top:0.86em}.iu{margin-top:2em}",
          ".j{display:none}.af{margin:0 48px}.eg{margin-top:0.78em}.ep{margin-top:0.74em}.fz{margin-top:56px}.hs{font-size:34px}.ht{margin-top:1.25em}.ig{font-size:21px}.ih{margin-top:0.86em}.it{margin-top:2em}",
          ".k{display:none}.ae{margin:0 24px}.ef{margin-top:0.39em}.eo{margin-top:0.42em}.fy{margin-top:40px}.hq{font-size:30px}.hr{margin-top:0.93em}.ie{font-size:18px}.if{margin-top:0.67em}.is{margin-top:1.56em}",
          ".ab{display:none}",
          ".y{transition:transform 300ms ease}.z{will-change:transform}.jf{transition:opacity 200ms}.kx{transition:border-color 150ms ease}.ky::before{background:\n" +
            "      radial-gradient(circle, rgba(28, 153, 99, 1) 60%, transparent 70%)\n" +
            '    }.kz::before{border-radius:50%}.la::before{content:""}.lb::before{display:block}.lc::before{z-index:0}.ld::before{left:0}.le::before{height:100%}.lf::before{position:absolute}.lg::before{top:0}.lh::before{width:100%}.li:hover::before{animation:k1 2000ms infinite cubic-bezier(.1,.12,.25,1)}.ll{transition:fill 200ms ease}',
          ".jg{display:none}",
          ".ki{display:none}"
        ],
        crawl_status : 'success'  
    }
]

const initialState = {
    input_tag: '',  // look for tag
    available_tags: [], //related tags
    articles: [],    //list of articles
    primary_tag: '', //tag for which the current result is being displayed
    filter: {
        word: '',
        keywords: '',
        headline: '',
        author: '',
        publisher: '',
        identifier: ''
    },
    filtered_articles : [],
    show_filtered : false,
    blog_html : '',
    blog_style : '',
    blog_response : ''
}


const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case aT.SET_INPUT_TAGS: return update(state, { input_tag: action.data.value }); break;

        case aT.SET_AVAILABLE_TAGS: return update(state, { available_tags: [...action.data] }); break;

        case aT.SET_PRIMARY_TAG: return update(state, { primary_tag: action.data }); break;


        case aT.PUSH_ARTICLE: {
            const newState = Object.assign({}, state);

            switch(action.data.crawl_status){
                case "wait" : {
                    const new_articles = [...newState.articles, { ...action.data }];
                    newState.articles = new_articles;
                }break;
                case "pending" : {
                    const index = indexOfFirst({articles : state.articles, status : 'wait' });
                    const new_articles = [...newState.articles];
                    const new_article = {...action.data};
                    new_articles[index] = new_article;
                    newState.articles = new_articles;
                }break;
                case "crawling" : {
                    const index = action.data.index;
                    const new_articles = [...newState.articles ];
                    const new_article = new_articles[index];
                    new_article.crawl_status = 'crawling';
                    new_articles[index] = new_article;
                    newState.articles = new_articles;
                }break;
                case "success" : {
                    const index = indexOfArticleId({articles: state.articles, id : action.data.identifier });
                    let new_articles = [...state.articles];
                    new_articles[index] = {...action.data};
                    newState.articles = new_articles;
                }break;
                case "err" : {
                    const index = indexOfFirstWaiting({articles : state.articles, status : 'crawling'});
                    let new_articles = [...state.articles];
                    new_articles[index] = {...action.data};
                    newState.articles = new_articles;
                }break;
            }
            return newState;
        }break;

        case aT.SET_ARTICLES: return update(state, {articles : [...action.data] }) ;break;

        case aT.SET_FILTER_INPUT : {
            const newState = Object.assign({}, state);
            const newFilter = Object.assign({}, newState.filter);
            newFilter[action.data.key] = action.data.value
            newState.filter = newFilter;
            return newState;
        }break;

        case aT.SET_SHOW_FILTERED : return update(state, {show_filtered : action.data }); break;

        case aT.SET_FILTERED_ARTICLES : return update(state, {filtered_articles : [...action.data]}); break;

        case aT.SET_BLOG_HTML : return update(state, {blog_html : action.data }); break;

        case aT.SET_BLOG_STYLE : return update(state, {blog_style : action.data }); break;

        case aT.SET_BLOG_RESPONSE : return update(state, {blog_response : action.data }); break;
        
        default: return state;
    }
}

export default articleReducer;