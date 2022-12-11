const linkedinIcon = 
    `
    <a href="https://www.linkedin.com/in/sepehr-borji/" target="_blank">
        <i class="fa-brands fa-linkedin fa-3x">
        </i>
    </a>
    `;

const itchIcon = 
    `
    <a href="https://dr-apple-games.itch.io/" target="_blank" >
        <i class="fa-brands fa-itch-io fa-3x" id="itch-io">
        </i>
    </a>
    `;

const gitHubIcon = 
    `
    <a href="https://github.com/SepehrBorji" target="_blank">
        <i class="fa-brands fa-github fa-3x" id="github">
        </i>
    </a>
    `;

const instagramIcon = 
    `
    <a href="https://www.instagram.com/sepehrborji.dev/" target="_blank" >
        <i class="fa-brands fa-instagram fa-3x" id="instagram">
        </i>
    </a>
    `;

const youtubeIcon = 
    `
    <a href="https://www.youtube.com/channel/UCANiJRjXo400D5VQtpyGYMA" target="_blank" >
        <i class="fa-brands fa-youtube fa-3x" id="youtube">
        </i>
    </a> 
    `;

let socialIcons = [linkedinIcon, itchIcon, gitHubIcon, instagramIcon, youtubeIcon];


function InitializeSocialIcons() 
{
    
    for (let i = 0; i < socialIconsContainers.length; i++) 
    {
        let innerContainerHtml = null;
        for (let j = 0; j < socialIcons.length; j++) 
        {
            if (innerContainerHtml === null) 
            {
                innerContainerHtml = socialIcons[j];
            }
            else 
            {
                innerContainerHtml += socialIcons[j];
            }
        }
        socialIconsContainers[i].innerHTML = innerContainerHtml;
    }
}

function InitializeFooter() 
{
    for (let i = 0; i < footerTags.length; i++) 
    {
        footerTags[i].innerHTML = `<h2>Let's connect!</h2><div class="social-icons-div"></div>`;
    }
}

function InitializePicture() 
{
    for (let i = 0; i < pictureContainers.length; i++) 
    {
        pictureContainers[i].innerHTML = 
        `
            <a class="home-btn" href="index.html">
                <img class="round-pic" src="images/headshot2.jpg">
            </a>
        `
    }
}

// setting up main picture
let pictureContainers = document.querySelectorAll(".pic-container");
InitializePicture();

// setting up footer
let footerTags = document.querySelectorAll("footer");
InitializeFooter();

// setting up social icons
let socialIconsContainers = document.querySelectorAll(".social-icons-div");
InitializeSocialIcons();





