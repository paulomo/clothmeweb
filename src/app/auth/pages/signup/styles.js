import { makeStyles } from "@material-ui/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";

export const useStyles = makeStyles(theme => ({
  root: {
    background:
      "linear-gradient(to right, " +
      theme.palette.primary.primary +
      " 0%, " +
      darken(theme.palette.primary.dark, 0.5) +
      " 100%)",
    color: theme.palette.primary.contrastText
  }
}));

// .App {
//   height: 100vh;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: top center;
// }

// .App-content {
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 40px;
// }

// @media (min-width: 650px ) {
//   .App {
//       background-position: center center;
//   }

//   .App-content {
//       align-items: flex-end;
//       justify-content: center;
//   }
// }

// <div className="App" style={{backgroundImage: `url(${imageUrl})` }}>
// <div className="App-content">
//     <h1>Pineapples</h1>
//     <p>They are good</p>
// </div>
// </div>