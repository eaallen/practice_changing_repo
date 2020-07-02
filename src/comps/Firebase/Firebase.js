import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import React from 'react' 
import produce from 'immer'
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
            doQueryAll: this.doQueryAll,
            doDeleteOneRecord: this.doDeleteOneRecord,
            doCreateOneRecord: this.doCreateOneRecord,
          }
          this.state = {
            test:'this is comming from the firbase context provider',
            loading: null,
            products: null,
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
        
        doQueryAll = async(_collection) =>{
          // get data from firebase and return as an array of objects
          const querySnapshot = await this.db.collection(_collection).get()
          let arr = []
          //for each 'key:value pair' . . . 
          for(const doc of querySnapshot.docs){
            let unordered = doc.data();
            unordered['id'] = doc.id;
            // data.task_history= []
            const ordered ={}
            Object.keys(unordered).sort().forEach(function(key) {
              ordered[key] = unordered[key];
            });
            arr.push(ordered)
          }
          console.log(arr,"<<<<<<<")
          return arr
        } 
        
        doDeleteOneRecord = async(_collection, _doc) =>{
          let success = false
          this.db.collection(_collection).doc(_doc).delete().then(()=>{
            console.log("it is deleted")
            success=true
            this.setState({deleted_one_record:success})
          }).catch(error=>{
            console.error(error)
          })
        }
        doCreateOneRecord = async(_collection, obj) =>{
          obj.product_date = firebase.firestore.Timestamp.fromDate(new Date())
          let success = false
          await this.db.collection(_collection).add(obj).then(()=>{
            console.log("it is deleted")
            success=true
          }).catch(error=>{
            console.error(error)
          })
          return success
        }
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



        loadFakeData = async(col, data, name)=>{
          console.log(this.db,"<-------rhrhrhw")
          // let cust = this.db.collection("customers").doc()
          // console.log('YEEET',cust.id)

          for(const d_item of data){
            let obj = {}
            let _collection = this.db.collection(name)
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
        const info = await this.doQueryAll('product')
        this.setState(state=> produce(state, draft=>{
          draft.products = info
        }))
      }
        render(){
          console.log("STATE OF CONTEXT",this.state)
          if(!this.state.products){
            return(
              <div>
                loading...
              </div>
            )
          }
          return(
            <AppContext.Provider value={{...this.state, ...this.actions }}>
              {this.props.children}
            </AppContext.Provider>
          )
        }
        
    }
export default Firebase;