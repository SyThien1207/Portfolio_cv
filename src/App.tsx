import React, { useState } from 'react';
import { Menu, X, Moon, Sun, Github, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import profileImage from './assets/profile.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`fixed w-full z-10 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Lê Sỹ Thiên</h1>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className={`${activeSection === 'home' ? 'font-bold border-b-2 border-blue-500' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`${activeSection === 'about' ? 'font-bold border-b-2 border-blue-500' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`${activeSection === 'projects' ? 'font-bold border-b-2 border-blue-500' : ''}`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`${activeSection === 'contact' ? 'font-bold border-b-2 border-blue-500' : ''}`}
              >
                Contact
              </button>
            </nav>
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} py-4`}>
            <nav className="flex flex-col space-y-4 px-4">
              <button 
                onClick={() => scrollToSection('home')}
                className={`text-left py-2 ${activeSection === 'home' ? 'font-bold' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-left py-2 ${activeSection === 'about' ? 'font-bold' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className={`text-left py-2 ${activeSection === 'projects' ? 'font-bold' : ''}`}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-left py-2 ${activeSection === 'contact' ? 'font-bold' : ''}`}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="min-h-screen pt-24 pb-16 flex items-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Lê Sỹ Thiên</h2>
                <h3 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-6">Fresher ASP.NET Developer</h3>
                <p className="text-lg mb-8 max-w-lg">
                  "Mục tiêu ngắn hạn của tôi là nâng cao kiến thức và kỹ năng phát triển phần mềm bằng cách tích cực tham gia vào các dự án của công ty. Về lâu dài, tôi mong muốn cải thiện chuyên môn và giá trị bản thân, đồng hành cùng công ty với vai trò là một thành viên cống hiến."
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    View Projects
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-300"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Lê Sỹ Thiên" 
                  className="w-64 h-64 object-cover rounded-full border-4 border-blue-500 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
                    <Mail size={16} />
                  </span>
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Mail className="mr-2 mt-1 text-blue-500" size={18} />
                    <span>lesythien2003@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <Phone className="mr-2 mt-1 text-blue-500" size={18} />
                    <span>039 7768 003</span>
                  </li>
                  <li className="flex items-start">
                    <Github className="mr-2 mt-1 text-blue-500" size={18} />
                    <a 
                      href="https://github.com/SyThien1207" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition duration-300"
                    >
                      github.com/SyThien1207
                    </a>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="mr-2 mt-1 text-blue-500" size={18} />
                    <span>Dĩ An, Bình Dương</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </span>
                  Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Programming Languages</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>C#</li>
                      <li>PHP</li>
                      <li>C++</li>
                      <li>Java</li>
                      <li>JavaScript</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Frameworks</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>ASP.NET Core</li>
                      <li>Laravel</li>
                      <li>Spring Boot</li>
                      <li>WinForm</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Databases</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>SQL Server</li>
                      <li>MySQL</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Soft Skills</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Làm việc nhóm</li>
                      <li>Làm việc độc lập</li>
                      <li>Nghiên cứu tài liệu</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                    <path d="M16 2v4"></path>
                    <path d="M8 2v4"></path>
                    <path d="M4 10h16"></path>
                  </svg>
                </span>
                Certificates
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                  <div>
                    <h4 className="font-medium">Tốt nghiệp trường nghề chuyên ngành CNTT</h4>
                    <p className="text-gray-600 dark:text-gray-400">2018 - 2020</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                  <div>
                    <h4 className="font-medium">Chứng chỉ bảo mật hệ điều hành và mạng</h4>
                    <p className="text-gray-600 dark:text-gray-400">03/2023</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Supermarket Management Software" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Supermarket Management Software</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">07/2023 - 09/2023</span>
                  </div>
                  <p className="mb-4">
                    Phần mềm quản lý siêu thị với các chức năng quản lý sản phẩm, khách hàng, đơn hàng và báo cáo.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">C#</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">SQL Server</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">WinForms</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Entity Framework</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Thiết kế cơ sở dữ liệu quản lý sản phẩm, khách hàng, đơn hàng</li>
                      <li>Phát triển giao diện bằng WinForms</li>
                      <li>Tích hợp các chức năng quản lý sản phẩm, khách hàng, xử lý đơn hàng và báo cáo</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
                  alt="Product Management Website" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Product Management Website</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">02/2024 - 04/2024</span>
                  </div>
                  <p className="mb-4">
                    Website quản lý sản phẩm và bài viết với trang quản trị cho admin và giao diện người dùng.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">ASP.NET Core Web API</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Bootstrap 5</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">SQL Server</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Thiết kế và lập trình hệ thống quản lý sản phẩm, bài viết</li>
                      <li>Xây dựng trang quản trị cho admin và giao diện người dùng</li>
                      <li>Cung cấp API cho các thao tác CRUD</li>
                    </ul>
                  </div>
                  <a 
                    href="https://github.com/SyThien1207/webasp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View on GitHub <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Fashion Website" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Fashion Website</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">04/2023 - 07/2024</span>
                  </div>
                  <p className="mb-4">
                    Trang thương mại điện tử quản lý sản phẩm, đơn hàng với chức năng giỏ hàng, thanh toán.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Laravel 11</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">PHP</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">MySQL</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">Bootstrap</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Thiết kế và lập trình trang thương mại điện tử quản lý sản phẩm, đơn hàng</li>
                      <li>Xây dựng chức năng giỏ hàng, thanh toán, đăng ký, đăng nhập</li>
                      <li>Tối ưu trải nghiệm người dùng</li>
                    </ul>
                  </div>
                  <a 
                    href="https://github.com/SyThien1207/webshop" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View on GitHub <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
              
              {/* Project 4 */}
              <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img 
                  src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80" 
                  alt="Web Management - Gạch Ngói Xuyên Á" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Web Management - Gạch Ngói Xuyên Á</h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400">10/2023 - 10/2024</span>
                  </div>
                  <p className="mb-4">
                    Quản lý và phát triển website công ty Gạch Ngói Xuyên Á.
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">WordPress</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      <li>Quản lý và phát triển website công ty</li>
                      <li>Tối ưu tốc độ tải trang và tìm kiếm</li>
                      <li>Cập nhật nội dung sản phẩm thường xuyên</li>
                    </ul>
                  </div>
                  <a 
                    href="https://gachngoixuyena.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Visit Website <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <a 
                        href="mailto:lesythien2003@gmail.com" 
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        lesythien2003@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <a 
                        href="tel:0397768003" 
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        039 7768 003
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                      <Github size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">GitHub</h3>
                      <a 
                        href="https://github.com/SyThien1207" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        github.com/SyThien1207
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Location</h3>
                      <p>Dĩ An, Bình Dương</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
                <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-500' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Lê Sỹ Thiên</h2>
              <p className="text-gray-400">Fresher ASP.NET Developer</p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/SyThien1207" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:lesythien2003@gmail.com" 
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:0397768003" 
                className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition duration-300"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Lê Sỹ Thiên. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;