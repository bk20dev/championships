import { Component } from "@angular/core";

interface Link {
  label: string;
  link: string;
  iconPath: string;
}

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  readonly links: Link[] = [
    { label: "Players", link: "/players", iconPath: "" },
    { label: "Teams", link: "/teams", iconPath: "" },
  ];
}
