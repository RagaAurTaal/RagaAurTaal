# Raga Aur Taal Website

Official website for **Raga Aur Taal** — a digital home for Indian classical music, bhajans, devotional recordings, learning resources, and music-related content.

Website: [RagaAurTaal.com](https://RagaAurTaal.com)
YouTube: [youtube.com/@RagaAurTaal](https://www.youtube.com/@RagaAurTaal)
Email: [Hello@RagaAurTaal.com](mailto:Hello@RagaAurTaal.com)
Phone / WhatsApp: [+1 202 550 7234](tel:+12025507234)

---

## About

Raga Aur Taal is focused on Indian music, including:

* Indian classical music
* Devotional music and bhajans
* Recordings and performances
* Raag and taal learning resources
* ABGMVM exam-related information and study support

The website currently serves as a simple, elegant online presence for the Raga Aur Taal brand and YouTube channel.

---

## Current Website Structure

```text
/
├── index.html
├── contact.html
├── recordings.html
├── bhajans.html
├── learn.html
├── raag-taal.html
├── abgmvm.html
├── styles.css
├── script.js
├── favicon.ico
└── assets/
```

### Active Navigation

The current public navigation includes:

* Home
* Recordings
* Contact

The following pages exist in the project but are currently hidden from the top navigation:

* Bhajans
* Learn
* Raag & Taal
* ABGMVM

These pages are kept for future expansion.

---

## Pages

### `index.html`

Homepage for Raga Aur Taal.

Includes:

* Hero image
* Brand introduction
* Link to YouTube recordings
* Contact call-to-action

### `recordings.html`

Currently redirects users to the Raga Aur Taal YouTube channel:

https://www.youtube.com/@RagaAurTaal

### `contact.html`

Contact page with:

* Website
* Email
* YouTube
* Phone / WhatsApp
* Embedded Google contact form

### Hidden Future Pages

These pages are included for future development:

* `bhajans.html`
* `learn.html`
* `raag-taal.html`
* `abgmvm.html`

They may later be used for:

* Bhajan lyrics and meanings
* Raag and taal guides
* Music learning content
* ABGMVM exam resources

---

## Design Direction

The site is designed around the Raga Aur Taal logo and brand identity.

Visual theme:

* Dark navy / black background
* Gold accents
* Ivory text
* Elegant serif typography
* Premium cultural music archive feel
* Minimal, refined layout

The goal is to create a website that feels:

> Classical, devotional, premium, warm, and timeless.

---

## Updating the Website

This is a static website built with plain HTML, CSS, and JavaScript.

No backend, database, or build process is required.

To update the website:

1. Edit the HTML, CSS, or JavaScript files.
2. Commit the changes to GitHub.
3. GitHub Pages will automatically update after deployment.

---

## GitHub Pages Preview

The site can be previewed using GitHub Pages before connecting the official domain.

To enable GitHub Pages:

1. Go to the GitHub repository.
2. Open **Settings**.
3. Click **Pages**.
4. Under **Build and deployment**, choose:

   * **Source:** Deploy from a branch
   * **Branch:** `main`
   * **Folder:** `/root`
5. Click **Save**.

GitHub will generate a preview URL similar to:

```text
https://yourusername.github.io/raga-aur-taal/
```

The custom domain does not need to be connected until the site is ready.

---

## Custom Domain

When the site is ready to go live, the intended custom domain is:

```text
RagaAurTaal.com
```

The custom domain should be configured through GitHub Pages and the domain provider’s DNS settings.

---

## Contact Form

The contact page includes an embedded Google Form.

Current embedded form:

```html
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSee47fcxXKbQPZ1i5RwvjCYXryB2O5Xkr7aom4K1mTsIGWLxQ/viewform?embedded=true" width="640" height="1174" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
```

---

## Brand Links

* Website: [RagaAurTaal.com](https://RagaAurTaal.com)
* YouTube: [youtube.com/@RagaAurTaal](https://www.youtube.com/@RagaAurTaal)
* Email: [Hello@RagaAurTaal.com](mailto:Hello@RagaAurTaal.com)
* Phone / WhatsApp: [+1 202 550 7234](tel:+12025507234)

---

## Future Ideas

Potential future additions:

* Bhajan lyrics library
* Raag guide
* Taal guide
* ABGMVM exam preparation section
* Practice resources
* Audio and video archive
* Performance/event pages
* Blog or journal
* Downloadable lyric sheets
* Newsletter signup

---

## License

All Raga Aur Taal branding, logos, images, recordings, and original content are owned by Raga Aur Taal unless otherwise noted.

Do not reuse brand assets, logos, or recordings without permission.

## Link Preview Image

The site includes Open Graph and Twitter Card metadata so links shared in messages/social apps show a clean preview image instead of cropping the logo oddly.

Preview image:

```text
assets/social-preview.png
```

After uploading changes, some apps may continue showing an old preview for a while because link previews are cached.


## Legal Pages

Version 10 adds legal pages and footer links:

```text
privacy.html
terms.html
```

These pages are linked from the footer across the website.


## Hidden Guest Network Page

This version adds a hidden success page for the guest Wi-Fi network:

```text
guest-success.html
```

This page is intentionally not included in the top navigation.


## Version 11

Adds the Raga learning and quiz section.

New visible pages:

```text
learn-about-ragas.html
find-your-raga.html
```

New raga pages are kept in the `ragas/` folder for easier editing:

```text
ragas/yaman.html
ragas/kafi.html
ragas/khamaj.html
ragas/bhimpalasi.html
ragas/bageshri.html
ragas/bhupali.html
ragas/desh.html
ragas/durga.html
ragas/alhaiya-bilawal.html
ragas/vrindavani-sarang.html
ragas/bhairav.html
ragas/bihag.html
ragas/kedar.html
ragas/tilak-kamod.html
ragas/asavari.html
ragas/bhairavi.html
```

The quiz stores only the result slug in the visitor's browser localStorage. It does not submit quiz answers or personal information to a server.


## Version 11.1.1

Updates the Find Your Raga quiz tie logic. If the score is tied between multiple ragas, the site does not ask an extra question. Instead, it resolves the tie using the answer to the most important question: "Which mood draws you in most?"


## Version 11.1.2

Fixes quiz and result page secondary button styling so buttons such as Back and Take the Test Again no longer appear as white boxes on the dark theme.


## Version 11.1.3

Removes the user-facing note that explained when an exact quiz tie was resolved using the mood question. Tie resolution still happens quietly in the background.


## Version 11.1.4

Fixes the "Take the Test Again" action on the quiz result. It now navigates directly to `/find-your-raga.html` instead of relying on JavaScript to reset the quiz in place.


## Version 11.1.5

Updates the "Take the Test Again" links generated by the quiz to use the full absolute URL:

```text
https://ragaaurtaal.com/find-your-raga.html
```


## Version 11.1.6

Removes the "Take the Test" button from each individual raga detail page. The "Back to Raga Library" button remains.


## Version 11.1.7

Adjusts the Find Your Raga quiz mobile layout so it feels less zoomed-in on iPhone-sized screens. This reduces mobile typography, card padding, option padding, and button sizing while keeping the desktop layout unchanged.
