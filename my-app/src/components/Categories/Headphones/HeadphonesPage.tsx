import '../../../dist-styles/categories.css'
import HeaderSection from '../../Elements/Header/HeaderSection';
import Navbar from '../../Elements/Navbar/Navbar';
import CategoryBanner from '../../Elements/CategoriesElements/CategoryBanner';
import CategorySelectionPanel from '../../Home/CategorySelectionPanel'; 
import AboutCompany from '../../Home/AboutCompany';
import Footer from '../../Elements/Footer/Footer';

const HeadphonesPage: React.FC = (props) => {
    return (
      <HeaderSection>
        <Navbar /> 
        <CategoryBanner>Headphones</CategoryBanner>
      </HeaderSection>
    )
}

export default HeadphonesPage; 