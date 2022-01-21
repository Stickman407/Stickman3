import "@ionic/core";
import { Component, h, State } from '@stencil/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

@Component({
    tag: 'page-home',
    styleUrl: 'page-home.css'
})
export class PageHome {
    p1: any;
    p2: any;
    gameLoop: any;
    app: any;
    auth: any;

    @State() p1Score = 0;
    @State() p2Score = 0;
    @State() obstacles: {
        x: number;
        y: number;
        health: number;
        size: number;
    }[] = [];
    @State() isLoggedIn = false;

    getSize(el: HTMLElement | any) {
        return el?.size || el?.offsetWidth || el?.offsetHeight;
    }

    isColliding(a: any, b: any) {
        return a.x < b.x + this.getSize(b) &&
            a.x + this.getSize(a) > b.x &&
            a.y < b.y + this.getSize(b) &&
            this.getSize(a) + a.y > b.y
    }

    signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(this.auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                this.isLoggedIn = true;
                console.log(user);
                // ...
            }).catch((error) => {
                console.log(error);
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    componentDidLoad() {
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyAMA-IRJnf6HgRpBk-N_yx-Eb8Ej-uRc4Y",
            authDomain: "madness-land.firebaseapp.com",
            databaseURL: "https://madness-land-default-rtdb.firebaseio.com",
            projectId: "madness-land",
            storageBucket: "madness-land.appspot.com",
            messagingSenderId: "695557296950",
            appId: "1:695557296950:web:baebb43cf2bea3439b9997",
            measurementId: "G-C8H54WN4YX"
        };

        // Initialize Firebase
        this.app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(this.app);
        this.auth = getAuth(this.app);

        console.log(this.app, analytics);

        this.gameLoop = setInterval(() => {

            // 1. Get all the bullets on the board
            const bullets = document.querySelectorAll(".bullet");
            bullets.forEach((bullet: HTMLElement) => {
                // 2. Check their position
                // console.log(this.p1.x, bullet.offsetLeft, bullet.classList);
                // 3. See if it intersects a tank

                // P1 HIT LOGIC
                if (
                    bullet.offsetLeft > this.p1.x && bullet.offsetLeft < this.p1.x + 60
                    && bullet.offsetTop > this.p1.y && bullet.offsetTop < this.p1.y + 60
                    && !bullet.classList.contains("bullet-stick")
                ) {
                    this.p2Score = this.p2Score + 1;
                    this.p1.isHit();
                }

                // P2 HIT LOGIC
                if (
                    bullet.offsetLeft > this.p2.x && bullet.offsetLeft < this.p2.x + 60
                    && bullet.offsetTop > this.p2.y && bullet.offsetTop < this.p2.y + 60
                    && !bullet.classList.contains("bullet-1")
                ) {
                    this.p1Score = this.p1Score + 1;
                    this.p2.isHit();
                }

                for (const obstacle of this.obstacles) {
                    if (this.isColliding(obstacle, bullet)) {
                        console.log(obstacle, bullet);
                    }
                }
            });

            for (const obstacle of this.obstacles) {
                if (this.isColliding(obstacle, this.p1)) {
                    this.p1.isColliding(true);
                }
                if (this.isColliding(obstacle, this.p2)) {
                    this.p2.isColliding(true);
                }
            }

            // 4. See if it's an enemy bullet
        }, 1000 / 400);

        this.createObstacles();
    }

    createObstacles() {
        const obstacles = [];
        for (let i = 0; i < 9; i++) {
            obstacles.push({
                health: 5,
                x: (Math.random() * 700) + 100,
                y: (Math.random() * 500) + 100,
                size: Math.random() * 100
            });
        }
        this.obstacles = obstacles;
    }

    disconnectedCallback() {
        this.gameLoop();
    }

    async logout() {
        this.isLoggedIn = false;
        return signOut(this.auth);
    }

    render() {
        return [
            // <tic-tac-toe></tic-tac-toe>,
            <div class="scoreboard">
                <button onClick={() => this.logout()}>logout</button>
                {!this.isLoggedIn && <ion-button onClick={() => this.signInWithGoogle()}>
                    Login with Google
                </ion-button>}
                <span>
                    P1: {this.p1Score}
                </span>
                <span>
                    P2: {this.p2Score}
                </span>
            </div>,
            <div class="map">
                <stick-tank ref={(p1) => this.p1 = p1} />
                <tank-1 ref={(p2) => this.p2 = p2} />
                {this.obstacles.map(obstacle => obstacle.health > 0 &&
                    <span
                        class="obstacle"
                        style={{
                            height: `${obstacle.size}px`,
                            width: `${obstacle.size}px`,
                            left: `${obstacle.x}px`,
                            top: `${obstacle.y}px`,
                        }}
                    />
                )}
            </div>
        ];
    }
}