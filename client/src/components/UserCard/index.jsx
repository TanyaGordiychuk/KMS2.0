// import React, { PureComponent } from 'react';
// import axios from 'axios';
//
// import { database } from '../../constants/backend-urls';
//
// class UserCard extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {},
//     };
//   }
//
//   componentDidMount() {
//     axios.get(`${database}/${id}`)
//       .then((res) => {
//         const user = res.data;
//         this.setState({ user });
//       });
//   }
//
//   render() {
//     return (
//       <h1>User</h1>
//     );
//   }
// }
//
// export default UserCard;
