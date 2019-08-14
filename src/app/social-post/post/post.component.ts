import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() post: object;
  @Input() index: number;
  @Output() onRemove = new EventEmitter<any>();
  constructor() {}
  removePost(index: number): void {
    this.onRemove.emit({ index });
  }
  ngOnInit() {}
}
