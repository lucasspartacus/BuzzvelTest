import { FaEuroSign } from 'react-icons/fa'; // Euro icon
import { Logo } from './images/logo';
import { PageImages } from './images/PageImages';

const footerLinks = [
  {
    title: 'Product',
    links: ['Pricing', 'Overview', 'Browse', 'Accessibility'],
  },
  {
    title: 'Solutions',
    links: ['Brainstorming', 'Ideation', 'Wireframing', 'Research'],
  },
  {
    title: 'Resources',
    links: ['Help Center', 'Blog', 'Tutorials', 'FAQs'],
  },
  {
    title: 'Support',
    links: ['Contact Us', 'Developers', 'Documentation', 'Integrations'],
  },
  {
    title: 'Company',
    links: ['About', 'Press', 'Events', 'Request Demo'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white px-6 pt-12 pb-6 md:px-[80px] px-[16px]">
      <div className="w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo */}
          <div className='mr-[18px]'>
            <Logo.reverse />
           </div>
        
          {/* Footer columns */}
          <div className="flex flex-col md:grid md:grid-cols-5 gap-8 w-full mb-4">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold mb-3">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm hover:underline flex items-center gap-1">
                        {link}
                        {link === 'Accessibility' && (
                          <span className="ml-1 bg-purple-100 text-purple-400 text-[11px] px-[4px] rounded uppercase">
                            beta
                          </span>
                        )}
                        {link === 'Request Demo' && (
                          <PageImages.arrowright fill="white" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <hr className="my-7 border-gray-600" />

        {/* Bottom: Left and Right */}
        <div className="flex flex-col md:flex-row justify-between md:items-center itens-right text-sm">
          {/* This will be on top on small screens */}
          <p className="mb-4 md:mb-0 ">uteach @ 2023. All rights reserved.</p>
          
          {/* This stays below on small screens, beside on large screens */}
          <div className="flex md:gap-8 gap-6">
            <a href="#" className="hover:underline mt-4">Terms</a>
            <a href="#" className="hover:underline mt-4">Privacy</a>
            <a href="#" className="hover:underline mt-4">Contact</a>
            
            <a href="#" className="flex items-center  gap-1 hover:underline">
              <PageImages.globe className="text-base" />
              EN
            </a>
            <a href="#" className="flex items-center  gap-1 hover:underline">
              <FaEuroSign className="text-base" />
              EUR
            </a>
            <a href="#" className="hover:underline "><PageImages.accessibility className="text-base" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}
