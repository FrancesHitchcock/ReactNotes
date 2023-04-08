# React Basics Handbook - Self-Directed React Project 

## About The Project

This app was created after completing the React Basics module of the Scrimba Frontend Developer Pathway. The UI / UX was inspired by the notes app example in Section 4 of the module. 

The project was self-identified and self-directed to consolidate basic React skills (including the Effect hook and clean-up functions) before moving on to the Advanced React module, whilst also creating what is intended to be a useful reference document.

The app incorporates the following features:

- The React Split library is used for wider screens, so the contents pane and details pane are displayed simultaneously and horizontally (with a draggable gutter) to aid navigation between topics. The panes scroll vertically, and independently of each other. The user clicks on a title in the contents pane to display the entry for that title in the details pane.
- For smaller screens the contents and details panes are conditionally rendered, with a "View contents" button at the top of the details page to navigate back to the contents page.
- The app was built "mobile-first" with the break point at 600px at which point the split pane was no longer useful.
- The light / dark mode selector was adopted directly from an example in the Scrimba module with minimal modification.
- CSS animations were used to fade-in content subtly on changing panes / pages. 

## Problems Encountered and Solutions Adopted 

- The content of the details page is determined by the data object body property. However, as this is in the form of html it cannot be rendered as a string. So the dangerouslySetInnerHTML property had to be used to render the content as html. Within that html are contained some examples where the markup is to be displayed on the page as html. This meant that associated angle brackets had to be converted to unicode to display correctly. This was achieved by means of the encode() function located at the top of the data.js page.
- The responsiveness is determined not just by the CSS media queries, but also on whether or not React Split is used for the layout. So to switch between Split and no-Split at the correct break-point an event listener had to be set up for the "resize" event. 
- I found that whenever the app re-rendered, the contents page re-positioned itself at the top of the viewport (zero scrolling), regardless of its scroll position when the user selected the topic on click. This made for a poor user experience and occurred with both smaller and larger screen layouts. So sessionStorage was used to save the scroll position and use it to update state on re-render. The smaller and larger screen layouts had to be dealt with individually as they required different properties to identify the scroll height (element.scrollTop and window.scrollY respectively).

## Reflections

- Scrolling is very slow on a mobile phone. Does this suggest a memory leak? I have not been able to discover what the problem is at this stage.
- The user experience could be further improved by automatically positioning the contents page at the selected title when the user resizes the window pane from small to large, as it currently settles at the top of the page. However, the user is unlikely to encounter this scenario often, if at all.
- If I were to start this project again from scratch I would create functions to format the html in the data object body property rather than formatting using html lists.

Frances Hitchcock, 1 April 2023

