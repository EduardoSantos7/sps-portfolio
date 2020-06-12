package com.google.sps.classes;

public class Comment {

    private final long id;
    private final String text;
    private final String author;
    private final long timestamp;

    public Comment(long id, String author, String text, long timestamp) {
        this.author = author;
        this.text = text;
        this.timestamp = timestamp;
        this.id = id;
    }
}