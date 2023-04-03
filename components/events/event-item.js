import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./event-item.module.css";
import Button from "./ui/button";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";

const EventItem = (props) => {
  const { id, title, location, time, date, image } = props;
  const readableDate = new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  //    replacing comma and space with a new line
  const formattedAddress = location.replace(", ", "\n");
  return (
    <li className={classes.item}>
      {/* <img src={"/" + "image"} alt="title" /> */}
      <Image src={"/" + image} alt={title} width={250} height={160} priority />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>{" "}
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
