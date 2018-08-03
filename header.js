import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Left, Right, Button, Icon, Title, Input, Body, Item, Footer, Badge } from 'native-base';
import { database } from './firebase'


class Header_p extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textChat: "",
            chat1: []
        };
    }

    componentDidMount() {
        var _this = this
        database.ref('/chat1').once('value').then(function (snapshot) {
            var chat1_bf = (snapshot.val());
            _this.setState({ chat1: chat1_bf })
            
        })   
        
    }
    
    handleText() {
        var currentChat = this.state.chat1
        currentChat.push(this.state.textChat)
        this.setState({ chat1: currentChat })
        database.ref().set({ chat1: this.state.chat1 })
        this.setState({ textChat: "" })
        this.component._root.scrollToEnd()
        
    }

    generated(){
        var array=[]
        for (let i = 0; i < this.state.chat1.length; i++){
            array.push((
                <Badge primary style={{ marginLeft: 15, marginTop: 15, marginBottom: 5, textAlign: Right }}>
                        <Text style={{ color: "white", marginLeft: 5, marginRight: 5 }}>{this.state.chat1[i]}</Text>
                        
                    </Badge>

            ))
        }
        return array
        
        
    }
    

    render() {
        return (
            <Container>
                <Header>

                    <Body>
                        <Title>Chat</Title>
                    </Body>

                </Header>
                <Content ref={c => (this.component = c)}>
                    {this.generated()}
                    


                </Content>
                <Footer>
                    < Body>
                        <Input placeholder='Text Input' style={{ marginLeft: 10 }} onChangeText={(e) => { this.setState({ textChat: e }) }} value={this.state.textChat} />
                    </Body>
                    <Right style={{ marginRight: 20 }}>
                        <Button success style={{ marginTop: 15, marginBottom: 15 }} onPress={() => this.handleText()} >
                            <Text style={{ marginLeft: 10, marginRight: 10, color: "white" }} >Send</Text>
                        </Button>
                    </Right>
                </Footer>
            </Container>

        )
    }
}

export default Header_p