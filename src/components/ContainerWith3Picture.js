import React, { Component } from 'react'
import {Container,Row,Col,Button } from 'react-bootstrap'
import game0 from '../img/game-0.jpg'
import game1 from '../img/game-1.jpg'
import game2 from '../img/game-2.jpg'
import allPic from '../img/allPic.jpg'

export default class ContainerWith3Picture extends Component {
    constructor(){
        super()
      this.state={
          allImges:[game0,game1,game2],
          pic1:allPic,
          pic2:allPic,
          num5:5,
          scoreUser:0,
          scoreComp:0,
          textic:'',
        
      }
    }

    componentDidMount(){
        document.querySelector('.changeBtn').style.display='none'
      

  

  


    }
  



    render() {
        
       

        return (
            <div className="containerWith3ImagesMain">
                <br/>

                <Container>
                    <Row className="containerWith3ImagesMainRed">
                        <Col md={6} sm={12} xs={12} className="b">
                        <img src={this.state.pic1} alt="" className="slike"/>
                        
                        
                        
                        </Col>

                        <Col md={6} sm={12} xs={12} className="b">
                        <img src={this.state.pic2} alt="" className="slike"/>
                        
                        
                        
                        </Col>

                    </Row>

                </Container>
           

                <Container>
                    <Row>
                        <Col xs={4}>
                            <Button className="changeBtn btn-md" onClick={()=>{
                            
                                this.setState({
                                    pic1:this.state.allImges[Math.floor(Math.random()*3)]
                                })
                              
                            }}>change</Button>
                        
                        
                        </Col>
                        <Col xs={4}>

                            <h2 className="text-center text-danger" >{this.state.num5}</h2>
                        
                        
                        </Col>
                        <Col xs={4}>
                        <Button className="playBtn float-right  btn-md"onClick={()=>{
                                document.querySelector('.playBtn').style.display='none'
                              const izbrisi =setInterval(()=>{
                                this.setState({
                                    num5:this.state.num5-1
                                })
                                document.querySelector('.changeBtn').style.display='flex'
                                if(this.state.num5 == 1){
                                
                                   
                                    this.setState({
                                        pic2:this.state.allImges[Math.floor(Math.random()*3)],
                                        
                                    })



                                } else if(this.state.num5 == 0){
                                    this.setState({
                                       
                                        num5:5
                                        
                                    })
                                   
                                    document.querySelector('.changeBtn').style.display='none'
                                    document.querySelector('.playBtn').style.display='flex'

                                    clearInterval(izbrisi)
                                    if(this.state.pic1==this.state.pic2){
                                        console.log('user i comp imaju iste znakove')
                                     this.setState({
                                         textic:"Its a Tie"
                                     })
                                    }else if(this.state.pic1 == this.state.allImges[0] && this.state.pic2 ==this.state.allImges[2]){

                                        console.log('user makaze comp kamen')

                                        this.setState({
                                            scoreComp:this.state.scoreComp+1,
                                            textic:"Computer Win"
                                        })



                                    }else if(this.state.pic1 == this.state.allImges[0] && this.state.pic2 ==this.state.allImges[1]){

                                        console.log('user makaze comp papir')

                                        this.setState({
                                            scoreUser:this.state.scoreUser+1,
                                            textic:"User Win "
                                        })

                                    }else if(this.state.pic1 == this.state.allImges[1] && this.state.pic2 ==this.state.allImges[0]){

                                        console.log('user papir comp makaze')

                                        this.setState({
                                            scoreComp:this.state.scoreComp+1,
                                            textic:"Computer win "
                                        })

                                    }else if(this.state.pic1 == this.state.allImges[1] && this.state.pic2 ==this.state.allImges[1]){

                                        console.log('user papir comp papir')

                                        this.setState({
                                            textic:"Its a Tie"
                                        })

                                    }else if(this.state.pic1 == this.state.allImges[1] && this.state.pic2 ==this.state.allImges[2]){

                                        console.log('user papir comp bunar')

                                        this.setState({
                                            scoreUser:this.state.scoreUser+1,
                                            textic:"User Win "
                                        })

                                    }else if(this.state.pic1 == this.state.allImges[2] && this.state.pic2 ==this.state.allImges[0]){

                                        console.log('user bunar comp makaze')

                                        this.setState({
                                            scoreUser:this.state.scoreUser+1,
                                            textic:"User Win"
                                        })

                                    }else if(this.state.pic1 == this.state.allImges[2] && this.state.pic2 ==this.state.allImges[1]){

                                        console.log('user bunar comp papir')

                                        this.setState({
                                            scoreComp:this.state.scoreComp+1,
                                            textic:"Computer Win "
                                        })

                                    }else if(this.state.pic1 == this.state.allImges[2] && this.state.pic2 ==this.state.allImges[2]){

                                        console.log('user bunar comp bunar')

                                        this.setState({
                                            textic:"Its a Tie"
                                        })


                                    }



                                }


                            },1000)



                        }}>play</Button>
                        
                        
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col xs={6} >
                            <h3 className="text-center text-warning"> User:<span className="text-light"> {this.state.scoreUser}</span></h3>
                        
                        </Col>
                       

                        <Col xs={6}>
                            <h3 className="text-center text-warning"> Comp:<span className="text-light"> {this.state.scoreComp}</span></h3>
                        
                        </Col>
                    </Row>
                </Container>
                <br></br>
                <Container>
                    <Row>
                    <Col  sm={12}>
                            <h3 className="text-center text-primary naslov2">{this.state.textic}</h3>
                        
                        </Col>
                    </Row>
                </Container>
                <br></br>

                <div className="prazanProstor">

                </div>
              

                
            </div>
        )
    }
}
