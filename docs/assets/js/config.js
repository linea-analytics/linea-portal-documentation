window.$docsify = {
  name: "<a href='https://linea-analytics.com/' target='_blank' rel='noopener noreferrer'><img src='./images/logos/logo_black_cropped.png' width='150px' alt='Linea Analytics'></a><br><h6 class='sidebar-subheader mt-1'>Portal Docs</h6>",

  repo: '',                  // e.g. 'yourname/yourrepo' to show GitHub link
  loadSidebar: true,         // uses _sidebar.md
  loadNavbar: true,          // uses _navbar.md
  coverpage: false,           // uses _coverpage.md
  subMaxLevel: 2,            // show up to h3 in sidebar TOC
  auto2top: true,
  themeable: {               // docsify-themeable options
    readyTransition: true,
    responsiveTables: true
  },
  search: {
    paths: 'auto',
    placeholder: 'Search…',
    noData: 'No results!'
  },
  tabs: {
    persist: true,
    sync: true
  },
  // Mermaid (diagrams) config
  mermaidConfig: {
    startOnLoad: true
  }
};
