import { Directive, OnDestroy, OnInit } from "@angular/core";

@Directive()
export abstract class BaseComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    this.onInit();
  }

  ngOnInit(): void {
    this.onDestroy();
  }


  abstract onInit(): void;
  abstract onDestroy(): void;
}
