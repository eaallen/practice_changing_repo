import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react' 
export const AppContext = React.createContext()

    const config = {
      apiKey: "AIzaSyBvK4vqOo-mH3iQmFDz0FxjtZs_1nl3jdw",
      authDomain: "fir-react-template-9576f.firebaseapp.com",
      databaseURL: "https://fir-react-template-9576f.firebaseio.com",
      projectId: "fir-react-template-9576f",
      storageBucket: "fir-react-template-9576f.appspot.com",
      messagingSenderId: "277936020424",
      appId: "1:277936020424:web:0861866f76cf0de722befd",
      measurementId: "G-BPZ04SPK8F"
    };
   
    class Firebase extends React.Component {
        constructor(props) {
          super(props)
          this.actions={
            updateUserAuth: this.updateUserAuth,
            loader: this.loader,
            doCreateUserWithEmailAndPassword:this.doCreateUserWithEmailAndPassword,
            doSignInWithEmailAndPassword:this.doSignInWithEmailAndPassword,
            doSignInWithGoogle:this.doSignInWithGoogle,
            doSignInWithRedirect:this.doSignInWithRedirect,
            doGetRedirectResult:this.doGetRedirectResult,
            doSignOut:this.doSignOut,
            doPasswordReset:this.doPasswordReset,
            doPasswordUpdate:this.doPasswordUpdate,
            doAddRecord:this.doAddRecord,
            doGetQueryRecord:this.doGetQueryRecord,
            getOneRecord:this.getOneRecord,
            checkState: this.checkState,
            user: this.user,
            loadFakeData: this.loadFakeData,
          }
          this.state = {
            test:'this is comming from the firbase context provider',
            loading: null,
            // user: null
          }
          console.log('here')
          firebase.initializeApp(config);
          console.log(firebase.app())
          this.auth = firebase.auth();
          this.db = firebase.firestore()
          this.googleProvider =new firebase.auth.GoogleAuthProvider();
          this.auth.onAuthStateChanged(function(user) {
            if (user){
              console.log('we have a user!')
            }else{
              console.log('no user... :(')
            }    
          });
        }

        
        updateUserAuth = (userInfo) =>{
          // this.state.auth_user = userInfo
          // // this.state.auth_user = userInfo          
          // // this.setState({auth_user: userInfo})
        }
        doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

        doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
        
        doSignInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider);
        
        //////////////////GOOGLE OAUTH2 REDIRECT/////////////////////
        doSignInWithRedirect = () => this.auth.signInWithRedirect(this.googleProvider);
        doGetRedirectResult = () => this.auth.getRedirectResult();

        doSignOut = () => this.auth.signOut();
        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
        doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
        doAddRecord = (_collection) => this.db.collection(_collection).doc()
        doGetQueryRecord = (_collection, item_looking_for,filtering_item) => this.db.collection(_collection).where(item_looking_for, '==',filtering_item).get();
        getOneRecord = (_collection, item_wanted) => this.db.collection(_collection).doc(item_wanted)
        checkState = async() =>{ await
          this.auth.onAuthStateChanged(function(user) {
            if (user){
              console.log('user accorfing to firebase')
            }else{
              console.log('according to firebase: no user info')
            }    
          });
        }
        user = () => this.auth.currentUser
    
        loader=()=>{          
          this.setState({...this.state, loading:true})
        }



        loadFakeData = async()=>{
          console.log(this.db,"<-------rhrhrhw")
          const col =  ['product_name','product_date','product_customize','product_description','product_current_size','product_price','product_color','product_type','product_reserved','product_category','avaliable_sizes','image_name']
          const data = [
            ['Cute Blouse',firebase.firestore.Timestamp.fromDate(new Date("September 1, 1830")),true,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies imperdiet malesuada. Morbi porta, libero eget maximus posuere, lacus diam consequat neque, sed ullamcorper velit sem quis tellus",'xs','$40.32',"red",'Shirt',false,'Child',['xs','s','m','l','xl'],'1'],
            ['1920 Flaper',firebase.firestore.Timestamp.fromDate(new Date("September 2, 1830")),true,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies imperdiet malesuada. Morbi porta, libero eget maximus posuere, lacus diam consequat neque, sed ullamcorper velit sem quis tellus",'s','$40.32',"blue",'Dress',false,'Woman',['xs','s','m','l','xl'],'2'],
            ['1980s jump suit',firebase.firestore.Timestamp.fromDate(new Date("September 22, 1830")),true,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies imperdiet malesuada. Morbi porta, libero eget maximus posuere, lacus diam consequat neque, sed ullamcorper velit sem quis tellus",'m','$40.32',"indego",'Jumpsuit',false,'Men',['xs','s','m','l','xl'],'3'],
            ['Cute Shoes',firebase.firestore.Timestamp.fromDate(new Date("September 30, 1830")),true,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies imperdiet malesuada. Morbi porta, libero eget maximus posuere, lacus diam consequat neque, sed ullamcorper velit sem quis tellus",'l','$40.32',"violet",'Shoe',false,'Woman',['xs','s','m','l','xl'],'4'],
            ['For Him',firebase.firestore.Timestamp.fromDate(new Date("September 19, 1830")),true,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies imperdiet malesuada. Morbi porta, libero eget maximus posuere, lacus diam consequat neque, sed ullamcorper velit sem quis tellus",'xl','$40.32',"black",'Shirt',false,'Men',['xs','s','m','l','xl'],'5'],
            ['For Her',firebase.firestore.Timestamp.fromDate(new Date("September 21, 1830")),false,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies imperdiet malesuada. Morbi porta, libero eget maximus posuere, lacus diam consequat neque, sed ullamcorper velit sem quis tellus",'m','$40.32',"white",'Shirt',false,'Woman',['xs','s','m','l','xl'],'6'],
            ['The Angular',firebase.firestore.Timestamp.fromDate(new Date("September 4, 1830")),false,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies imperdiet malesuada. Morbi porta, libero eget maximus posuere, lacus diam consequat neque, sed ullamcorper velit sem quis tellus",'s','$40.32',"yellow",'Shirt',false,'Men',['xs','s','m','l','xl'],'7'],
            ['Over the Top',firebase.firestore.Timestamp.fromDate(new Date("September 10, 1830")),false,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies imperdiet malesuada. Morbi porta, libero eget maximus posuere, lacus diam consequat neque, sed ullamcorper velit sem quis tellus",'s','$40.32',"green",'Shirt',false,'Woman',['xs','s','m','l','xl'],'8'],
            ['Croppy',firebase.firestore.Timestamp.fromDate(new Date("September 18, 1830")),false,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies imperdiet malesuada. Morbi porta, libero eget maximus posuere, lacus diam consequat neque, sed ullamcorper velit sem quis tellus",'xs','$40.32',"yellow",'Shirt',false,'Woman',['xs','s','m','l','xl'],'9'],
            ['Sumer Breeze',firebase.firestore.Timestamp.fromDate(new Date("September 19, 1830")),false,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies imperdiet malesuada. Morbi porta, libero eget maximus posuere, lacus diam consequat neque, sed ullamcorper velit sem quis tellus",'s','$40.32',"red",'Skirt',false,'Woman',['xs','s','m','l','xl'],'10']
          ]
          // let cust = this.db.collection("customers").doc()
          // console.log('YEEET',cust.id)

          for(const d_item of data){
            let obj = {}
            let _collection = this.db.collection("product")
            for(let icount = 0; icount < col.length; icount ++){
              obj[col[icount]] = d_item[icount]
            }
            // make a customer instance
            //make data instance inside customer
            //customer data
            _collection.add(obj)
          }
        }

      async componentDidMount(){
      // STUFF YOU DO RIGHT AT THE BEGINING 
      }
        render(){
          return(
            <AppContext.Provider value={{...this.state, ...this.actions }}>
              {this.props.children}
            </AppContext.Provider>
          )
        }
        
    }
export default Firebase;