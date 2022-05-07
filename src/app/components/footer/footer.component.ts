import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  activeContent: string = "How TenderCuts is rebooting meat business in India with its Omnichannel Play";
  activeIndex: number = 0;
  footerContents = [{
    content: "How TenderCuts is rebooting meat business in India with its Omnichannel Play",
    imgSrc: "https://cdn2.tendercuts.in/news_article/c71133d6-b26b-4d66-bd87-49ff4b7e81a4.png",
    isActive: true,
  },
  {
    content: "This company is breaking barriers by hiring women butchers",
    imgSrc: "https://cdn2.tendercuts.in/news_article/588c1812-43f2-476f-8809-bb4f952a1799.png",
    isActive: false,
  },
  {
    content: "We introduced 'contactless retail' services to help maintain social distancing.",
    imgSrc: "https://cdn2.tendercuts.in/news_article/8a9bba70-12b3-4784-b8a9-4f6d92a861e4.png",
    isActive: false,
  }
  ]

  companyLinks = [{
    name: 'Privacy Policy',
    url: '#',
  },
  {
    name: 'Terms and Condition',
    url: '#',
  },
  {
    name: 'Help & Support',
    url: '#',
  }]

  links = [{
    name: 'Quality Check',
    url: '#',
  },
  {
    name: 'Franchaise',
    url: '#',
  },
  {
    name: 'Refer Earn',
    url: '#',
  },
  {
    name: 'Store Locator',
    url: '#',
  },
  {
    name: 'Careers',
    url: '#',
  },]

  socialLinks = [{
    name: 'cs@tendercuts.in',
    url: '#',
  },
  {
    name: 'Chennai',
    url: '#',
  },
  {
    name: 'Hyderabad',
    url: '#',
  },
  {
    name: 'Bangalore',
    url: '#',
  },
  {
    name: 'Facebook',
    url: '#',
  },
  {
    name: 'Contact us',
    url: '#',
  },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setActiveItem(index: number) {
    this.activeIndex = index;
    this.activeContent = this.footerContents[index].content;
  }

}
