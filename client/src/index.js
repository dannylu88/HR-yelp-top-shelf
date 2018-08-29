import React from 'react';
import ReactDOM from 'react-dom';
import DataGenButton from './components/DataGenButton.jsx';
import BizPageMainHeader from './App/BizPageMainHeader';
import BizPageContentDisplay from './App/BizPageContentDisplay';
import styled from 'styled-components';

const TopShelfWrapper = styled.div`
  background-color: #f6f6f6;
  height: 520px;
`;

const axios = require('axios');

class TopShelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      findInfo: {
        findInput: '',
        nearInput: ''
      },
      businessInfo: {
        id: '',
        name: '',
        claimed: true,
        rating: 0,
        review_count: 2,
        price: 0,
        category: '',
        address: {},
        website: '',
        email: '',
        phone: ''
      }
    }
    this.FindSearchChange = this.FindSearchChange.bind(this);
    this.DataGen = this.DataGen.bind(this);
  }

  componentDidMount() {
    console.log('Component Mounted!');
    this.FetchBusinessData()
  }

  FindSearchChange(findInput, nearInput) {
    console.log('search changes');
    console.log('state:', this.state);
    this.setState({
      findInfo: {
        findInput,
        nearInput
      } 
    });
    axios.get(`/main/biz/${findInput}/${nearInput}`)
    .then((response) => {
      console.log(response.data)
      if (response.data) {
        let biz = response.data;
        let address = {
          street: biz.street,
          zip: biz.zip,
          state: biz.state,
          city: biz.city,
          country: biz.country
        }

        this.setState({
          businessInfo: {
            id: biz.id,
            name: biz.restaurant,
            claimed: biz.claimed,
            rating: biz.rating,
            //review_count: biz.review_count,
            price: biz.price,
            category: biz.category,
            address: address,
            website: biz.website,
            email: biz.email,
            phone: biz.phone
          }
        });
      }
    })
    .catch(error => console.log(error));
  }

  DataGen() {
    // axios.post('/main/fakeData')
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch(error => console.log(error));
  }

  FetchBusinessData() {
    //here is where to get data from db
    axios.get('/main/biz/vel error suscipit')
      .then((response) => {
        console.log(response.data)
        if (response.data) {
          let biz = response.data;
          let address = {
            street: biz.street,
            zip: biz.zip,
            state: biz.state,
            city: biz.city,
            country: biz.country
          }

          this.setState({
            businessInfo: {
              id: biz.id,
              name: biz.restaurant,
              claimed: biz.claimed,
              rating: biz.rating,
              review_count: biz.review_count,
              price: biz.price,
              category: biz.category,
              address: address,
              website: biz.website,
              email: biz.email,
              phone: biz.phone
            }
          });
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <TopShelfWrapper className="top-shelf">
        <BizPageMainHeader searchChange={this.FindSearchChange}/>
        <BizPageContentDisplay businessInfo={this.state.businessInfo} />
      </TopShelfWrapper>
    )
  }
}

ReactDOM.render(<TopShelf />, document.getElementById("root"));
