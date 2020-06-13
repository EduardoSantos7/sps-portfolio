package com.google.sps.classes;

/* This class is used to contain the basic data
 * needed to represent a comment in the DB.
 */
public class Comment {

    private final String text;
    private final String author;
    private final long timestamp;

    public Comment(String author, String text, long timestamp) {
        this.author = author;
        this.text = text;
        this.timestamp = timestamp;
    }
}