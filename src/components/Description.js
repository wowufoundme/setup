import React from 'react';

import './Description.css';

import { ReactComponent as Hand } from '../assets/hand.svg';

const Description = () => {
  return (
    <div className="description-container">
      <p className="say-hello">
        <Hand className="hand-icon"/><h3>Hello</h3>
      </p>
      <p>
        My name is Shubhkirti Sharma and I'm a final year undergraduate majoring in Computer Science from Panjab University, India. I am a ReactJS developer, amateur UI/UX and graphic designer and KDrama enthusiast. I
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="heart-icon"><path d="M4.036 1a4.036 4.036 0 00-2.854 6.89l5.964 5.964a.5.5 0 00.708 0l5.964-5.965a4.036 4.036 0 00-5.707-5.707l-.611.61-.61-.61A4.036 4.036 0 004.035 1z" fill="currentColor"></path></svg>
        creating neat, clean and minimal experiences for the community.
      </p>
      <p>
        I also enjoy making music in my free time and watching Korean dramas on Netflix and Viki. You can listen to some of them on my <a href="https://soundcloud.com/crackden_music/tracks" className="bar">Soundcloud</a>.
      </p>
      <p>
        I can be found: 
        <ul className="list-expanded">
          <li>Learning new things, currently &mdash; React Native Development</li>
          <li>Browsing 
            Sp<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15" class="inline-icon"><defs/><circle cx="12" cy="12" r="12" fill="#4caf50"/><g fill="#212121"><path d="M16.872 17.656v.001c-.203 0-.329-.063-.518-.174-3.019-1.82-6.532-1.896-10.002-1.185-.189.049-.436.126-.576.126-.47 0-.765-.373-.765-.765 0-.499.295-.736.659-.813 3.963-.875 8.013-.798 11.467 1.268.295.189.47.358.47.798 0 .438-.344.744-.735.744zM18.175 14.483h-.001c-.252 0-.421-.111-.596-.203-3.025-1.79-7.533-2.512-11.545-1.423-.232.063-.358.126-.576.126-.518 0-.938-.421-.938-.938s.252-.861.75-1.001c1.345-.378 2.719-.659 4.732-.659 3.14 0 6.174.779 8.565 2.202.392.232.547.533.547.953-.005.521-.411.943-.938.943zM4.548 6.998c1.703-.499 3.61-.735 5.686-.735 3.532 0 7.234.735 9.939 2.313.378.218.624.518.624 1.093 0 .658-.533 1.127-1.122 1.127l-.001-.001c-.252 0-.407-.063-.625-.189C15.605 8.55 9.444 8.057 5.458 9.17c-.175.048-.393.125-.625.125-.639 0-1.127-.499-1.127-1.142 0-.657.407-1.029.842-1.155z"/></g></svg>tify, 
            Re<svg xmlns="http://www.w3.org/2000/svg" viewBox="-4.771 .104 53.521 44.858" width="15" height="15" class="inline-icon"><defs/><path fill="#FFF" d="M29.909 35.89c-1.999 1.997-5.218 2.382-7.921 2.382-2.7 0-5.922-.385-7.918-2.382M36.021 4.276L25.899 1.894l-3.93 11.996L25.9 1.894m18.241 3.201a3.99 3.99 0 11-7.98 0 3.991 3.991 0 017.98 0zm.661 23.906c0 8.262-10.263 14.961-22.922 14.961-12.66 0-22.922-6.698-22.922-14.961 0-8.262 10.262-14.961 22.922-14.961 12.659 0 22.922 6.698 22.922 14.961zM-.744 26.676a5.061 5.061 0 01-3.027-4.636 5.06 5.06 0 018.935-3.257m33.568.103a5.061 5.061 0 019.018 3.154 5.064 5.064 0 01-3.23 4.72"/><path d="M21.879 44.963c-13.191 0-23.922-7.16-23.922-15.961 0-.608.051-1.21.151-1.801a6.066 6.066 0 01-2.879-5.161 6.068 6.068 0 016.06-6.061c1.493 0 2.916.546 4.017 1.522 4.149-2.663 9.73-4.339 15.887-4.455L25.235.71l.882.208.021.005 9.421 2.218A5 5 0 0140.151.105a4.996 4.996 0 014.99 4.991 4.996 4.996 0 01-4.99 4.99 4.995 4.995 0 01-4.99-4.984l-8.596-2.024-3.273 9.99c5.933.231 11.291 1.912 15.291 4.517a6.028 6.028 0 014.108-1.605 6.068 6.068 0 016.061 6.061 6.019 6.019 0 01-3.08 5.28c.087.553.132 1.113.132 1.681-.002 8.801-10.734 15.961-23.925 15.961zM.157 27.11a9.05 9.05 0 00-.2 1.892c0 7.699 9.834 13.961 21.922 13.961 12.088 0 21.922-6.263 21.922-13.961 0-.612-.062-1.215-.183-1.807a1.003 1.003 0 01-.099-.435c-.669-2.627-2.494-5.012-5.13-6.934a.992.992 0 01-.429-.304c-4.007-2.755-9.732-4.482-16.081-4.482-6.285 0-11.961 1.693-15.962 4.401a1.022 1.022 0 01-.401.279C2.823 21.643.951 24.044.256 26.694a.992.992 0 01-.084.384c-.005.011-.009.022-.015.032zm40.097-8.319c2.319 1.855 4.021 4.064 4.891 6.488a4.033 4.033 0 001.605-3.239 4.065 4.065 0 00-4.061-4.061 4.04 4.04 0 00-2.435.812zm-38.965-.812a4.065 4.065 0 00-4.06 4.061c0 1.213.54 2.34 1.436 3.1.899-2.405 2.618-4.596 4.946-6.433a4.066 4.066 0 00-2.322-.728zM40.15 2.104c-1.648 0-2.99 1.342-2.99 2.991s1.342 2.99 2.99 2.99 2.99-1.341 2.99-2.99-1.341-2.991-2.99-2.991zM21.988 39.271c-4.005 0-6.827-.875-8.626-2.675a1 1 0 011.415-1.414c1.405 1.405 3.763 2.089 7.211 2.089 3.447 0 5.807-.684 7.214-2.089a.999.999 0 111.413 1.414c-1.801 1.8-4.622 2.675-8.627 2.675z"/><path fill="#FF4500" d="M30.097 22.35c-2.038 0-3.749 1.707-3.749 3.745 0 2.037 1.711 3.688 3.749 3.688s3.688-1.651 3.688-3.688c0-2.038-1.651-3.745-3.688-3.745zm-16.158 0c-2.036 0-3.745 1.709-3.745 3.745s1.708 3.688 3.745 3.688 3.688-1.652 3.688-3.688-1.652-3.745-3.688-3.745z"/></svg>dit, 
            Inst<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169.063 169.063" width="15" height="15" class="inline-icon"><defs/><path fill="#ED3E49" d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z"/><path fill="#ED3E49" d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22-2.051 2.04-3.23 4.88-3.23 7.78 0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z"/></svg>gram 
            and 
            Awwwards.</li>
          <li>Experimenting with music in different genres in FL Studio.</li>
          <li>Writing small things about technology on my <a href="/blog" className="bar">blog</a></li>
          <li>Watching Korean Dramas on <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="15" height="15" class="inline-icon"><defs/><path fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-width="2.44808" d="M1.5655518 1.5655518h508.8689v508.8689h-508.8689z"/><path fill="#d5011d" d="M139.53988547 83.165437l-.00067513 345.66912512 11.76895349-1.02890576c19.69706392-3.23659723 39.8235137-5.57864058 59.81966243-6.96199222l9.42826041-.65218042V123.6735376z"/><path fill="#aa011a" d="M372.46078878 428.83456212V84.05999089h-81.0162012v305.17182668z"/><path fill="#d5011d" d="M255.99999956 171.00927856h-20.2540503l20.2540503 170.62011972 35.54315774 78.60799462 5.9762951.38212642c21.12092366 1.35094515 42.37552404 3.76860362 63.1723829 7.18613704l11.76895349 1.02890576z"/><path fill="#ff0021" d="M255.99999956 341.62939828V171.00927856l-39.13757653-86.94928767h-77.32253756z"/></svg> &mdash; I watch a lot. Need recommendations or see what I am watching right now? <a href="https://www.reddit.com/r/kdramarecommends/comments/fyqgjt/dramas_to_bingewatch_this_quarantine_month_the/" target="_blank" rel="noopener noreferrer" className="bar">Here you go</a></li>
          <li>Experimenting with aftermarket custom <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="inline-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 4a6.473 6.473 0 00-2.934.698l-1.65-2.475-.832.554 1.627 2.44A6.492 6.492 0 001 10.5V13h13v-2.5a6.492 6.492 0 00-2.711-5.282l1.627-2.44-.832-.555-1.65 2.475A6.473 6.473 0 007.5 4zM5 10H4V9h1v1zm5 0h1V9h-1v1z" fill="#a4c639"></path></svg> firmware on my Oneplus 6 </li>
        </ul>
      </p>
      <p>
        You can learn more about me through:
        <ul className="social">
          <li><a href="https://github.com/wowufoundme">Github</a></li>
          <li><a href="https://www.linkedin.com/in/shubhkirti-sharma-a36850142/">LinkedIn</a></li>
        </ul>
        <ul className="social">
          <li><a href="https://twitter.com/shubhkirti_here">Twitter</a></li>
          <li><a href="https://www.instagram.com/shubhkirtisharma/">Instagram</a></li>
        </ul>
      </p>
    </div>
  )
}

export default Description;