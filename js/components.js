'use strict';

////Navigation component
class websiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="website-navigation navigation-sticky-properties">
    <div class="nav-container">
      <a href="/"
        ><img src="/img/Logo pughouse.png" alt="Pug House logo"
      /></a>
      <div class="nav-wrapper">
        <div class="theme-options">
          <p>Motyw</p>
          <div>
            <button
              color="#FFFFFF"
              class="theme-btn white-theme-btn active-theme"
            ></button>
            <button color="#FFEFFD" class="theme-btn pink-theme-btn"></button>
            <button color="#E2FEFF" class="theme-btn blue-theme-btn"></button>
          </div>
          <button class="close-btn close-navigation-btn">
            <i class="ri-close-circle-fill"></i>
          </button>
        </div>
        <ul>
          <li><a class="nav-el" href="#section-3-home">BLOG</a></li>
          <li><a class="gang-members-btn" href="">GANG MEMBERS</a></li>
          <li><a class="nav-el" href="#section-4-home">SOCIAL MEDIA</a></li>
          <li><a class="nav-el" href="#section-5-home">KONTAKT</a></li>
        </ul>
      </div>
      <button class="hamburger-icon"><i class="ri-menu-3-fill"></i></button>
    </div>
  </nav>`;
  }
}

customElements.define('website-nav', websiteNav);

////Footer component

class websiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <footer class="main-footer">
    <h4>Copyright © pughouse.pl</h4>
    <a href="/polityka-prywatnosci">
      <h5>Polityka prywatności</h5>
    </a>
    <div class="social-media-icons-wrapper">
      <a target="_blank" href="https://www.instagram.com/pug_house_gang/"
        ><button class="social-media-icon">
          <i class="ri-instagram-fill"></i></button
      ></a>
      <a target="_blank" href="https://www.facebook.com/PugHouseGang"
        ><button class="social-media-icon">
          <i class="ri-facebook-circle-fill"></i></button
      ></a>
    </div>
  </footer>`;
  }
}

customElements.define('website-footer', websiteFooter);

////Cookies component
class cookies extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="cookies-container hide">
        <h3>Cookies 🍪</h3>
        <p>
          Korzystając ze strony PugHouse.pl wyrażasz <span class="highlight">dobrowolnie</span> zgodę.
          W każdej chwili możesz zapoznać się z
          <a target="_blank" href="/polityka-prywatnosci"
            ><span class="highlight">polityką prywatności</span></a
          >.
        </p>
        <button class="cookies-accept-btn pink-btn">OK!</button>
      </div>`;
  }
}

customElements.define('cookies-container', cookies);

////Welcome letter when user signed up
class welcomeLetter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  <div class="welcome-letter-container popup hide">
        <h3>Dołączyłeś do GANGU! 😎</h3>
        <p>
          Sprawdź teraz <span class="highlight">skrzynkę mailową 📧</span>, bo otrzymasz krótką
          instrukcję jak zgłosić do gangu swojego PUGA!
        </p>
      </div>`;
  }
}

customElements.define('welcome-letter-container', welcomeLetter);

////Sign up container
class signUpContainer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="sign-up-to-gang-container  popup hide">
        <button class="close-sign-up-section-btn close-btn">
          <i class="ri-close-circle-fill"></i>
        </button>
        <div class="sign-up-text-wrapper">
          <h3>Od dołączenia dzieli Cię krok!</h3>
          <ul>
            <span class="highlight">Dlaczego warto zapisać się do GANGU? 🤔</span>
            <li>
              <i class="ri-arrow-right-s-fill"></i>Pug House to blog i społeczność wszystkich
              miłośników mopsów
            </li>
            <li>
              <i class="ri-arrow-right-s-fill"></i>chcę dzielić się z Tobą wiedzą publikując artykuły
            </li>
            <li>
              <i class="ri-arrow-right-s-fill"></i>nowinki i plotki instagramowe i facebookowe
            </li>
            <li><i class="ri-arrow-right-s-fill"></i>polityka zero spamu</li>
            <li>
              <i class="ri-arrow-right-s-fill"></i>pokaż wszystkim swojego PUGA! Niech widnieje dumnie
              w
              <span class="highlight">GANG MEMBERS</span>
            </li>
            <li>
              <i class="ri-arrow-right-s-fill"></i>po zapisaniu się
              <span class="highlight">SPRAWDŹ MAILA 📧</span>. Znajdziesz tam krótką instrukcję jak
              zgłosić swojego PUGA!
            </li>
          </ul>
        </div>
        <!-- Begin Mailchimp Signup Form -->
        <div id="mc_embed_signup">
          <form
            action="https://gmail.us18.list-manage.com/subscribe/post?u=b6b835b8e2de5cfbe9ec944a0&amp;id=2d54bdd82c"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <h2></h2>
              <div class="mc-field-group">
                <label for="mce-EMAIL">Adres e-mail <span class="asterisk">*</span> </label>
                <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
              </div>
              <div class="mc-field-group">
                <label for="mce-FNAME">Twoje imię<span class="asterisk">*</span> </label>
                <input type="text" value="" name="FNAME" class="required" id="mce-FNAME" />
              </div>
              <div
                id="mergeRow-gdpr"
                class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
              >
                <div class="content__gdpr">
                  <label>Zgoda na mailing i kontakt</label>
                  <p>
                    Wyrażam zgodę na przesyłanie PUGOWYCH newsletterów, jak i na kontakt za
                    pośrednictwem zadeklarowanego adresu e-mail.
                  </p>
                  <fieldset
                    class="mc_fieldset gdprRequired mc-field-group"
                    name="interestgroup_field"
                  >
                    <label class="checkbox subfield" for="gdpr_96662"
                      ><input
                        type="checkbox"
                        id="gdpr_96662"
                        name="gdpr[96662]"
                        value="Y"
                        class="av-checkbox gdpr"
                      /><span class="highlight highlight-form">ZGODA!</span>
                      
                    </label>
                  </fieldset>
                  <p>
                    W każdej chwili możesz zrezygnować z subskrypcji, klikając link w stopce każdego
                    e-maila. Aby uzyskać informacje na temat praktyk PUG HOUSE w zakresie ochrony
                    prywatności, sprawdź
                    <a target="_blank" href="https://pughouse.pl/polityka-prywatnosci"
                      >https://pughouse.pl/polityka-prywatnosci</a
                    >
                  </p>
                </div>
                <div class="content__gdprLegal">
                  <p>
                    Korzystamy z Mailchimp jako platformy marketingowej. Klikając poniżej zgadzasz
                    się, że Twoje dane zostaną przekazane do Mailchimp w celu przetworzenia.
                    <a href="https://mailchimp.com/legal/terms" target="_blank"
                      >Dowiedz się więcej o praktykach prywatności firmy Mailchimp tutaj.</a
                    >
                  </p>
                </div>
              </div>
              <div hidden="true"><input type="hidden" name="tags" value="2141790" /></div>
              <div id="mce-responses" class="clear foot">
                <div class="response" id="mce-error-response" style="display: none"></div>
                <div class="response" id="mce-success-response" style="display: none"></div>
              </div>
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px" aria-hidden="true">
                <input
                  type="text"
                  name="b_b6b835b8e2de5cfbe9ec944a0_2d54bdd82c"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input
                    type="submit"
                    value="DOŁĄCZAM!"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                  <p class="brandingLogo">
                    <a
                      target="_blank"
                      href="http://eepurl.com/h61Xzn"
                      title="Mailchimp - email marketing made easy and fun"
                      ><img
                        src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                    /></a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <!--End mc_embed_signup-->
      </div>`;
  }
}

customElements.define('sign-up-container', signUpContainer);

////Gang members component
class gangMembers extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="section-gang-members popup hide">
        <h3>GANG MEMBERS</h3>
        <button class="close-btn"><i class="ri-close-circle-fill"></i></button>
        <div class="gang-members-wrapper">
          <div class="member">
            <img src="/img/Big Mikey.png" alt="Mikey pug house gang member" />
            <h4>MIKEY</h4>
            <h5>Toruń</h5>
          </div>
  
          <div class="member">
            <img src="/img/Molly.png" alt="Molly pug house gang member" />
            <h4>MOLLY</h4>
            <h5>Toruń</h5>
          </div>
  
          <div class="member">
            <img src="/img/Molly.png" alt="Molly pug house gang member" />
            <h4>MOLLY</h4>
            <h5>Toruń</h5>
          </div>
  
          <div class="member">
            <img src="/img/Molly.png" alt="Molly pug house gang member" />
            <h4>MOLLY</h4>
            <h5>Toruń</h5>
          </div>
  
          <div class="member">
            <img src="/img/Molly.png" alt="Molly pug house gang member" />
            <h4>MOLLY</h4>
            <h5>Toruń</h5>
          </div>
  
          <div class="member">
            <img src="/img/Molly.png" alt="Molly pug house gang member" />
            <h4>MOLLY</h4>
            <h5>Toruń</h5>
          </div>
  
          <div class="member">
            <img src="/img/Molly.png" alt="Molly pug house gang member" />
            <h4>MOLLY</h4>
            <h5>Toruń</h5>
          </div>
  
          <div class="member">
            <img src="/img/Molly.png" alt="Molly pug house gang member" />
            <h4>MOLLY</h4>
            <h5>Toruń</h5>
          </div>
  
          <div class="member">
            <img src="/img/Big Mikey.png" alt="Mikey pug house gang member" />
            <h4>MIKEY</h4>
            <h5>Toruń</h5>
          </div>
  
          <div class="member">
            <img src="/img/Big Mikey.png" alt="Mikey pug house gang member" />
            <h4>MIKEY</h4>
            <h5>Toruń</h5>
          </div>
  
          <div class="member">
            <img src="/img/Big Mikey.png" alt="Mikey pug house gang member" />
            <h4>MIKEY</h4>
            <h5>Toruń</h5>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('gang-members-container', gangMembers);

////Post sidebar component
class postSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<aside class="post-aside-container">
    <div class="social-media-banner">
      <h4>Pug House w Social Media</h4>
      <div class="social-media-icons-wrapper">
        <a target="_blank" href="https://www.instagram.com/pug_house_gang/">
          <button class="social-media-icon">
            <i class="ri-instagram-fill"></i>
          </button>
        </a>
        <a target="_blank" href="https://www.facebook.com/PugHouseGang">
          <button class="social-media-icon">
            <i class="ri-facebook-circle-fill"></i>
          </button>
        </a>
      </div>
    </div>
    <div class="join-gang-banner">
      <h4>Dołącz do GANGU!</h4>
      <p>
        <span class="highlight">Pug House</span> to społeczność mopsiarzy.
        Sprawdź korzyści i dołącz do nas!
      </p>
      <button class="pink-btn join-gang-btn">SPRAWDŹ!</button>
    </div>
  </aside>`;
  }
}

customElements.define('post-sidebar', postSidebar);
