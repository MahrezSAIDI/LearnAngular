import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService{
    faceSnaps : FaceSnap[] =[ 
        {   id : 1,
            title: 'Harold',
            description:'le meilleur informaticien du monde',
            imageUrl:'https://i.pinimg.com/originals/15/b2/30/15b23009d9be015bd95654837fa924de.jpg',
            createdDate: new Date(),
            snaps: 250,
            location : 'NY'
        },
          {
            id : 2,
            title: 'Reez',
            description:  'Le soldat de l humanité',
            imageUrl:  'https://i.pinimg.com/originals/8f/07/c5/8f07c51a29c907431ac05378a4ac29c9.jpg',
            createdDate: new Date,
            snaps: 2
      },{
        id : 3,
        title: 'Shooww',
        description:  'La championne ',
        imageUrl:  'https://lesniouzdotcom.files.wordpress.com/2015/01/sarah-shahi-joue-shaw.jpg',
        createdDate: new Date,
        snaps: 50
  },{
    id : 4,
    title: 'Groovz',
    description:  'La Machine Bis',
    imageUrl:  'https://file1.telestar.fr/var/telestar/storage/images/2016/photos/spoiler-person-of-interest-un-personnage-majeur-va-disparaitre-avant-la-fin-de-la-serie-211962/1355727-1-fre-FR/Spoiler-Person-of-Interest-un-personnage-majeur-va-disparaitre-avant-la-fin-de-la-serie-!.jpg?alias=original',
    createdDate: new Date,
    snaps: 150
},{
    id : 5,
    title: 'Balouuuuu',
    description:  'Le gentil chien ',
    imageUrl:  'https://blogpersonofinterest.files.wordpress.com/2014/04/imagestj169nah.jpg',
    createdDate: new Date,
    snaps: 300
}
        ];

        getAllFaceSnaps(): FaceSnap[]{
            return this.faceSnaps;
        }
        snapFaceSnapbyId (faceSnapId:number):void{
            const faceSnap =this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
            if (faceSnap){
                faceSnap.snaps++;
            }else{
                throw new Error('FaceSnap not found!');
            }
        }
        unSnapFaceSnapById (faceSnapId:number):void{
            const faceSnap =this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
            if (faceSnap){
                faceSnap.snaps--;
            }else{
                throw new Error('FaceSnap not found!');
            }
        }



}